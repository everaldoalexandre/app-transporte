"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function CaptchaTurnstile({
  onVerify,
}: {
  onVerify: (token: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !(window as any).turnstile) return;

    const widgetId = (window as any).turnstile.render(ref.current, {
      sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
      callback: (token: string) => {
        onVerify(token);
      },
      "expired-callback": () => {
        onVerify("");
      },
      "error-callback": () => {
        onVerify("");
      },
    });

    return () => {
      if ((window as any).turnstile && widgetId) {
        (window as any).turnstile.remove(widgetId);
      }
    };
  }, [onVerify]);

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <div ref={ref} />
    </>
  );
}
