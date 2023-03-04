import Body from '@/components/Body'
import HeroImage from '@/components/HeroImage'
import Script from 'next/script'
import Hero from '../public/workshop_kc.jpeg'

export default function Tickets() {
  return (
    <>
      <HeroImage src={Hero} title="Tickets" alt="workshop" />
      <div className="container mx-auto">
        <div className="px-2 md:px-0 pt-10 pb-8">
          <Body
            mobileLeft
            text="Full pass includes workshops and parties. It does NOT include the Masterclass with Igor & Rocio. You need to buy an add-on that will be available later."
          />
          <Body mobileLeft text="1 - 3 SEPTEMBER 2023 - HELSINKI, FINLAND" />
        </div>

        {/* Ticket Tailor embedded code */}
        <div className="bg-black">
          <div
            id="someId"
            dangerouslySetInnerHTML={{
              __html: `<!-- Ticket Tailor Widget. Paste this into your website where you want the widget to appear. Do not change the code or the widget may not work properly. -->
            <div class="tt-widget"><div class="tt-widget-fallback"><p><a href="https://www.tickettailor.com/checkout/new-session/id/1979805/chk/f691/?ref=website_widget" target="_blank">Click here to buy tickets</a><br /><small><a href="https://www.tickettailor.com?rf=wdg_136742" class="tt-widget-powered">Sell tickets online with Ticket Tailor</a></small></p></div><script src="https://cdn.tickettailor.com/js/widgets/min/widget.js" data-url="https://www.tickettailor.com/checkout/new-session/id/1979805/chk/f691/" data-type="inline" data-inline-minimal="true" data-inline-show-logo="false" data-inline-bg-fill="true" data-inline-inherit-ref-from-url-param="" data-inline-ref="website_widget"></script></div>
            <!-- End of Ticket Tailor Widget -->`,
            }}
          />

          <Script
            src="https://cdn.tickettailor.com/js/widgets/min/widget.js"
            data-url="https://www.tickettailor.com/checkout/new-session/id/1979805/chk/f691/"
            data-type="inline"
            data-inline-minimal="true"
            data-inline-show-logo="false"
            data-inline-bg-fill="true"
            data-inline-inherit-ref-from-url-param=""
            data-inline-ref="website_widget"
          />
        </div>
      </div>
    </>
  )
}
