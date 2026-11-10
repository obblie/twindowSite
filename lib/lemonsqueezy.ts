const DEFAULT_API_BASE_URL = "https://api.lemonsqueezy.com/v1";
const DEFAULT_CURRENCY = "USD";

const lifetimeProductConfig: ProductConfig = {
  defaultProductId: "903610",
  productIdEnv: "LEMON_SQUEEZY_LIFETIME_PRODUCT_ID",
  checkoutUrlEnv: "LEMON_SQUEEZY_LIFETIME_CHECKOUT_URL",
  fallbackPriceInCents: 2499,
  fallbackCheckoutUrl: "https://twindow.lemonsqueezy.com/checkout/buy/d280ea30-1b4c-477e-ba53-9e873bd8fca0",
  fallbackBillingLabel: null
};

const subscriptionProductConfig: ProductConfig = {
  defaultProductId: "1500107",
  productIdEnv: "LEMON_SQUEEZY_SUBSCRIPTION_PRODUCT_ID",
  checkoutUrlEnv: "LEMON_SQUEEZY_SUBSCRIPTION_CHECKOUT_URL",
  fallbackPriceInCents: 799,
  fallbackCheckoutUrl: "https://twindow.lemonsqueezy.com/checkout/buy/007b5984-0a1e-4c30-b718-d07ac933df2a",
  fallbackBillingLabel: "/month"
};

type ProductConfig = {
  defaultProductId: string;
  productIdEnv: string;
  checkoutUrlEnv: string;
  fallbackPriceInCents: number;
  fallbackCheckoutUrl: string;
  fallbackBillingLabel: string | null;
};

type LemonPrice = {
  attributes?: {
    category?: string;
    unit_price?: number | null;
    unit_price_decimal?: string | null;
    renewal_interval_unit?: "day" | "week" | "month" | "year" | null;
    renewal_interval_quantity?: number | null;
  };
};

type LemonPriceResponse = {
  data?: LemonPrice[];
};

type LemonStoreResponse = {
  data?: {
    attributes?: {
      currency?: string;
      url?: string;
    };
  };
};

type LemonVariant = {
  type?: string;
  id?: string;
  attributes?: {
    slug?: string;
    sort?: number;
    status?: "pending" | "draft" | "published";
    test_mode?: boolean;
  };
};

type LemonProductResponse = {
  data?: {
    attributes?: {
      buy_now_url?: string | null;
      store_id?: number;
      status?: "draft" | "published";
      test_mode?: boolean;
    };
  };
  included?: LemonVariant[];
};

export type StorefrontProduct = {
  formattedPrice: string;
  checkoutUrl: string;
  billingLabel: string | null;
  available: boolean;
};

export type PricingCatalog = {
  lifetime: StorefrontProduct;
  subscription: StorefrontProduct;
};

function normalizeBaseUrl(input?: string) {
  const base = (input || DEFAULT_API_BASE_URL).trim().replace(/\/+$/, "");
  return /\/v\d+$/.test(base) ? base : `${base}/v1`;
}

function formatPrice(priceInCents: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency
  }).format(priceInCents / 100);
}

function getPriceInCents(price?: LemonPrice) {
  const unitPrice = price?.attributes?.unit_price;
  if (typeof unitPrice === "number" && Number.isFinite(unitPrice)) {
    return unitPrice;
  }

  const decimalPrice = Number(price?.attributes?.unit_price_decimal);
  return Number.isFinite(decimalPrice) ? decimalPrice : null;
}

function getBillingLabel(price: LemonPrice | undefined, fallback: string | null) {
  const unit = price?.attributes?.renewal_interval_unit;
  const quantity = price?.attributes?.renewal_interval_quantity;
  if (!unit || !quantity) {
    return fallback;
  }

  return quantity === 1 ? `/${unit}` : `/ ${quantity} ${unit}s`;
}

function selectVariant(included: LemonVariant[] | undefined, testMode: boolean) {
  const variants = (included || [])
    .filter((item) => item.type === "variants" && item.attributes?.test_mode === testMode)
    .sort((a, b) => (a.attributes?.sort ?? 0) - (b.attributes?.sort ?? 0));

  return (
    variants.find((variant) => variant.attributes?.status === "published") ||
    variants.find((variant) => variant.attributes?.status === "pending")
  );
}

export function getCheckoutOverlayUrl(url: string, options: { hideLogo?: boolean } = {}) {
  const { hideLogo = true } = options;
  const checkoutUrl = new URL(url);
  checkoutUrl.searchParams.set("embed", "1");
  if (hideLogo) {
    checkoutUrl.searchParams.set("logo", "0");
  } else {
    checkoutUrl.searchParams.delete("logo");
  }
  return checkoutUrl.toString();
}

export function getLemonConfig() {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY;
  if (!apiKey) {
    throw new Error("Missing LEMON_SQUEEZY_API_KEY");
  }

  return {
    apiKey,
    baseUrl: normalizeBaseUrl(process.env.LEMON_API_BASE_URL)
  };
}

async function getCurrentProduct(config: ProductConfig) {
  const fallbackCurrency = process.env.LEMON_SQUEEZY_CURRENCY || DEFAULT_CURRENCY;
  const fallbackCheckoutUrl = process.env[config.checkoutUrlEnv] || config.fallbackCheckoutUrl;
  const fallbackProduct: StorefrontProduct = {
    formattedPrice: formatPrice(config.fallbackPriceInCents, fallbackCurrency),
    checkoutUrl: fallbackCheckoutUrl,
    billingLabel: config.fallbackBillingLabel,
    available: true
  };
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY;

  if (!apiKey) {
    return fallbackProduct;
  }

  const baseUrl = normalizeBaseUrl(process.env.LEMON_API_BASE_URL);
  const productId = process.env[config.productIdEnv] || config.defaultProductId;
  const headers = {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
    Authorization: `Bearer ${apiKey}`
  };

  try {
    const productUrl = new URL(`${baseUrl}/products/${productId}`);
    productUrl.searchParams.set("include", "variants");

    const productResponse = await fetch(productUrl, {
      headers,
      next: { revalidate: 300 }
    });
    if (productResponse.status === 404) {
      return { ...fallbackProduct, available: false };
    }
    if (!productResponse.ok) {
      throw new Error(`Lemon Squeezy product request failed with ${productResponse.status}`);
    }

    const productPayload = (await productResponse.json()) as LemonProductResponse;
    if (productPayload.data?.attributes?.status !== "published") {
      return { ...fallbackProduct, available: false };
    }
    const variant = selectVariant(
      productPayload.included,
      productPayload.data?.attributes?.test_mode === true
    );
    const variantId = variant?.id;
    const variantSlug = variant?.attributes?.slug;
    if (!variantId || !variantSlug) {
      return { ...fallbackProduct, available: false };
    }

    const storeId = productPayload.data?.attributes?.store_id;
    const priceUrl = new URL(`${baseUrl}/prices`);
    priceUrl.searchParams.set("filter[variant_id]", variantId);
    priceUrl.searchParams.set("page[size]", "1");
    priceUrl.searchParams.set("sort", "-created_at");

    const [priceResponse, storeResponse] = await Promise.all([
      fetch(priceUrl, {
        headers,
        next: { revalidate: 300 }
      }),
      storeId
        ? fetch(`${baseUrl}/stores/${storeId}`, {
            headers,
            next: { revalidate: 300 }
          })
        : Promise.resolve(null)
    ]);

    if (!priceResponse.ok) {
      throw new Error(`Lemon Squeezy price request failed with ${priceResponse.status}`);
    }

    const pricePayload = (await priceResponse.json()) as LemonPriceResponse;
    const priceInCents = getPriceInCents(pricePayload.data?.[0]);
    if (priceInCents === null) {
      throw new Error("Lemon Squeezy returned no usable price");
    }

    let currency = fallbackCurrency;
    let storeUrl = new URL(fallbackCheckoutUrl).origin;
    if (storeResponse?.ok) {
      const storePayload = (await storeResponse.json()) as LemonStoreResponse;
      currency = storePayload.data?.attributes?.currency || currency;
      storeUrl = storePayload.data?.attributes?.url?.replace(/\/+$/, "") || storeUrl;
    }

    return {
      formattedPrice: formatPrice(priceInCents, currency),
      checkoutUrl:
        productPayload.data?.attributes?.buy_now_url ||
        `${storeUrl}/checkout/buy/${encodeURIComponent(variantSlug)}`,
      billingLabel: getBillingLabel(pricePayload.data?.[0], config.fallbackBillingLabel),
      available: true
    };
  } catch (error) {
    console.error("Unable to load the current Lemon Squeezy product; using fallback purchase details.", error);
    return fallbackProduct;
  }
}

export function getLifetimeProduct() {
  return getCurrentProduct(lifetimeProductConfig);
}

export function getSubscriptionProduct() {
  return getCurrentProduct(subscriptionProductConfig);
}

export async function getPricingCatalog(): Promise<PricingCatalog> {
  const [lifetime, subscription] = await Promise.all([getLifetimeProduct(), getSubscriptionProduct()]);
  return { lifetime, subscription };
}
