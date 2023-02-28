import Body from "@/components/Body";
import MainTitle from "@/components/MainTitle";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";

export default function Tickets() {
  return (
    <div className="container mx-auto">
      <MainTitle text="Tickets" />

      <section>
        <SectionTitle text="Super Early Bird Couple pass" />
        <Body text="Only 6 Couple tickets available. Be fast!" />
        <SectionTitle text="Early Bird Couple pass" />
        <Body text="Only 6 Couple tickets available. Be fast!" />
      </section>

      {/* Ticket Tailor embedded code */}
      <div>
        <div
          id="someId"
          dangerouslySetInnerHTML={{
            __html: `<!-- Ticket Tailor Widget. Paste this into your website where you want the widget to appear. Do not change the code or the widget may not work properly. -->
            <div class="tt-widget"><div class="tt-widget-fallback"><p><a href="https://www.tickettailor.com/checkout/new-session/id/1979805/chk/f691/?ref=website_widget" target="_blank">Click here to buy tickets</a><br /><small><a href="https://www.tickettailor.com?rf=wdg_136742" class="tt-widget-powered">Sell tickets online with Ticket Tailor</a></small></p></div><script src="https://cdn.tickettailor.com/js/widgets/min/widget.js" data-url="https://www.tickettailor.com/checkout/new-session/id/1979805/chk/f691/" data-type="inline" data-inline-minimal="true" data-inline-show-logo="false" data-inline-bg-fill="false" data-inline-inherit-ref-from-url-param="" data-inline-ref="website_widget"></script></div>
            <!-- End of Ticket Tailor Widget -->`,
          }}
        />
        <Script
          src="https://cdn.tickettailor.com/js/widgets/min/widget.js"
          data-url="https://www.tickettailor.com/checkout/new-session/id/1979805/chk/f691/"
          data-type="inline"
          data-inline-minimal="true"
          data-inline-show-logo="false"
          data-inline-bg-fill="false"
          data-inline-inherit-ref-from-url-param=""
          data-inline-ref="website_widget"
        />
      </div>
    </div>
  );
}
