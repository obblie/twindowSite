"use client";

import { FormEvent, useEffect, useState } from "react";

const PASSWORD = "echopane";
const STORAGE_KEY = "twindow-password-ok";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved === "true") {
      setAuthorized(true);
    }
    setReady(true);
  }, []);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setAuthorized(true);
      setError("");
      return;
    }
    setError("Incorrect password.");
  };

  if (!ready) return null;
  if (authorized) return <>{children}</>;

  return (
    <main className="min-h-screen px-4 py-8 md:px-8">
      <div className="mx-auto flex min-h-[80vh] w-full max-w-xl items-center">
        <section className="card-surface w-full space-y-6 p-6 md:p-8">
          <div className="space-y-2">
            <p className="kicker">Protected</p>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Enter Password</h1>
            <p className="text-sm text-muted md:text-base">This preview is private. Enter the access password to continue.</p>
          </div>

          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="space-y-2">
              <input
                type={showPassword ? "text" : "password"}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                className="focus-ring w-full rounded-xl border border-border/70 bg-card/55 px-4 py-3 text-base text-foreground"
                placeholder="Password"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword((current) => !current)}
                className="focus-ring rounded px-1 py-0.5 text-xs font-medium text-muted transition hover:text-foreground"
              >
                {showPassword ? "Hide password" : "Show password"}
              </button>
            </div>
            {error ? <p className="text-sm text-red-300">{error}</p> : null}
            <button
              type="submit"
              className="focus-ring inline-flex w-full items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:brightness-110"
            >
              Unlock
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
