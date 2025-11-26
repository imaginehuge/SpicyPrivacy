"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const CAL_NAMESPACE = "introductory-call";
const CAL_LINK = "spicy-privacy";
const CAL_CONFIG = { layout: "month_view" } as const;
const CAL_CONFIG_ATTR = JSON.stringify(CAL_CONFIG);
const BRAND_COLOR = "#b48c2b";

/**
 * CalBookingButton renders the CTA button and wires it up to Cal.com via data attributes.
 * The getCalApi call only sets up shared UI styling so the button behaves like the embed snippet.
 */
export function CalBookingButton() {
  useEffect(() => {
    let isMounted = true;

    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      if (!isMounted) return;
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": BRAND_COLOR },
          dark: { "cal-brand": BRAND_COLOR },
        },
        hideEventTypeDetails: false,
        layout: CAL_CONFIG.layout,
      });
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <button
      type="button"
      data-cal-link={CAL_LINK}
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-config={CAL_CONFIG_ATTR}
      className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-8 text-base font-bold transition-transform hover:scale-105"
    >
      Book Free Introductory Call
    </button>
  );
}
