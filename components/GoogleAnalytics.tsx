"use client";

import Script from "next/script";
import * as gtag from "@/lib/gtag";

export default function GoogleAnalytics() {
  gtag.useGtag();

  return (
    <>
      {process.env.NODE_ENV !== "development" && (
        <>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                        page_path: window.location.pathname,
                    });
                    gtag('event', 'screen_view', {
                        app_name: 'Portfolio_V2',
                        screen_name: 'Home',
                      });
                    `,
            }}
          />
        </>
      )}
    </>
  );
}
