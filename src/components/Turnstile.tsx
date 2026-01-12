"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function CaptchaTurnstile({
  onVerify,
}: {
  onVerify: (token: string) => void;
}) {
  useEffect(() => {
    (window as any).onTurnstileVerify = (token: string) => {
      onVerify(token);
    };
  }, [onVerify]);

  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" />

      <div
        className="cf-turnstile"
        data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
        data-callback="onTurnstileVerify"
      />
    </>
  );
}
