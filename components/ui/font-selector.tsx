"use client";

import { useEffect, useState } from "react";

const fontOptions = {
  "inter-ibm": { label: "Inter + IBM Plex Mono", sansVar: "--font-sans-inter", monoVar: "--font-mono-ibm-plex" },
  "ibmplexsans-space": { label: "IBM Plex Sans + Space Mono", sansVar: "--font-sans-ibm-plex-sans", monoVar: "--font-mono-space-mono" },
  "public-sourcecode": { label: "Public Sans + Source Code Pro", sansVar: "--font-sans-public-sans", monoVar: "--font-mono-source-code-pro" },
  "source3-sourcecode": { label: "Source Sans 3 + Source Code Pro", sansVar: "--font-sans-source-sans-3", monoVar: "--font-mono-source-code-pro" },
  "work-fira": { label: "Work Sans + Fira Code", sansVar: "--font-sans-work-sans", monoVar: "--font-mono-fira-code" },
  "dm-ibm": { label: "DM Sans + IBM Plex Mono", sansVar: "--font-sans-dm-sans", monoVar: "--font-mono-ibm-plex" },
  "noto-sourcecode": { label: "Noto Sans + Source Code Pro", sansVar: "--font-sans-noto-sans", monoVar: "--font-mono-source-code-pro" },
  "source-serif4-sourcecode": { label: "Source Serif 4 + Source Code Pro", sansVar: "--font-sans-source-serif-4", monoVar: "--font-mono-source-code-pro" },
  "ptserif-ibm": { label: "PT Serif + IBM Plex Mono", sansVar: "--font-sans-pt-serif", monoVar: "--font-mono-ibm-plex" },
  "lora-jetbrains": { label: "Lora + JetBrains Mono", sansVar: "--font-sans-lora", monoVar: "--font-mono-jetbrains" },
  "bitter-fira": { label: "Bitter + Fira Code", sansVar: "--font-sans-bitter", monoVar: "--font-mono-fira-code" },
  "domine-space": { label: "Domine + Space Mono", sansVar: "--font-sans-domine", monoVar: "--font-mono-space-mono" },
  "manrope-jetbrains": { label: "Manrope + JetBrains Mono", sansVar: "--font-sans-manrope", monoVar: "--font-mono-jetbrains" },
  "nunito-space": { label: "Nunito Sans + Space Mono", sansVar: "--font-sans-nunito-sans", monoVar: "--font-mono-space-mono" },
  "jakarta-jetbrains": { label: "Plus Jakarta Sans + JetBrains Mono", sansVar: "--font-sans-plus-jakarta-sans", monoVar: "--font-mono-jetbrains" },
  "rubik-fira": { label: "Rubik + Fira Code", sansVar: "--font-sans-rubik", monoVar: "--font-mono-fira-code" },
  "figtree-ibm": { label: "Figtree + IBM Plex Mono", sansVar: "--font-sans-figtree", monoVar: "--font-mono-ibm-plex" },
  "lato-jetbrains": { label: "Lato + JetBrains Mono", sansVar: "--font-sans-lato", monoVar: "--font-mono-jetbrains" },
  "assistant-fira": { label: "Assistant + Fira Code", sansVar: "--font-sans-assistant", monoVar: "--font-mono-fira-code" },
  "karla-space": { label: "Karla + Space Mono", sansVar: "--font-sans-karla", monoVar: "--font-mono-space-mono" },
  "mulish-ibm": { label: "Mulish + IBM Plex Mono", sansVar: "--font-sans-mulish", monoVar: "--font-mono-ibm-plex" },
  "outfit-jetbrains": { label: "Outfit + JetBrains Mono", sansVar: "--font-sans-outfit", monoVar: "--font-mono-jetbrains" },
  "urbanist-sourcecode": { label: "Urbanist + Source Code Pro", sansVar: "--font-sans-urbanist", monoVar: "--font-mono-source-code-pro" },
  "bevietnam-fira": { label: "Be Vietnam Pro + Fira Code", sansVar: "--font-sans-be-vietnam-pro", monoVar: "--font-mono-fira-code" },
  "barlow-space": { label: "Barlow + Space Mono", sansVar: "--font-sans-barlow", monoVar: "--font-mono-space-mono" },
  "sora-ibm": { label: "Sora + IBM Plex Mono", sansVar: "--font-sans-sora", monoVar: "--font-mono-ibm-plex" },
  "lexend-jetbrains": { label: "Lexend + JetBrains Mono", sansVar: "--font-sans-lexend", monoVar: "--font-mono-jetbrains" },
  "heebo-sourcecode": { label: "Heebo + Source Code Pro", sansVar: "--font-sans-heebo", monoVar: "--font-mono-source-code-pro" },
  "cabin-fira": { label: "Cabin + Fira Code", sansVar: "--font-sans-cabin", monoVar: "--font-mono-fira-code" },
  "raleway-space": { label: "Raleway + Space Mono", sansVar: "--font-sans-raleway", monoVar: "--font-mono-space-mono" }
} as const;

const fontGroups = [
  {
    label: "Sans — Straight t",
    values: ["inter-ibm", "ibmplexsans-space", "public-sourcecode", "source3-sourcecode", "work-fira", "dm-ibm", "noto-sourcecode"] as const
  },
  {
    label: "Serif — Straight t",
    values: ["source-serif4-sourcecode", "ptserif-ibm", "lora-jetbrains", "bitter-fira", "domine-space"] as const
  },
  {
    label: "More Utility Pairs",
    values: [
      "manrope-jetbrains",
      "nunito-space",
      "jakarta-jetbrains",
      "rubik-fira",
      "figtree-ibm",
      "lato-jetbrains",
      "assistant-fira",
      "karla-space",
      "mulish-ibm",
      "outfit-jetbrains",
      "urbanist-sourcecode",
      "bevietnam-fira",
      "barlow-space",
      "sora-ibm",
      "lexend-jetbrains",
      "heebo-sourcecode",
      "cabin-fira",
      "raleway-space"
    ] as const
  }
] as const;

type FontOption = keyof typeof fontOptions;

function applyFont(value: FontOption) {
  const selected = fontOptions[value] ?? fontOptions["inter-ibm"];
  document.body.style.setProperty("--font-sans", `var(${selected.sansVar})`);
  document.body.style.setProperty("--font-mono", `var(${selected.monoVar})`);
}

export function FontSelector() {
  const [font, setFont] = useState<FontOption>("manrope-jetbrains");

  useEffect(() => {
    const saved = localStorage.getItem("twindow-font");
    if (saved && saved in fontOptions) {
      const valid = saved as FontOption;
      setFont(valid);
      applyFont(valid);
      return;
    }
    applyFont("manrope-jetbrains");
  }, []);

  return (
    <label className="inline-flex items-center">
      <span className="sr-only">Choose font</span>
      <select
        value={font}
        onChange={(event) => {
          const nextFont = event.target.value as FontOption;
          setFont(nextFont);
          applyFont(nextFont);
          localStorage.setItem("twindow-font", nextFont);
        }}
        className="focus-ring h-9 max-w-[17rem] rounded-md border border-border/55 bg-card/25 px-2.5 font-mono text-[12px] font-medium text-foreground/90"
        aria-label="Choose font"
      >
        {fontGroups.map((group) => (
          <optgroup key={group.label} label={group.label}>
            {group.values.map((value) => (
              <option key={value} value={value}>
                {fontOptions[value].label}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </label>
  );
}
