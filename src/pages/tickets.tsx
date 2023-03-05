import HeroImage from '@/components/HeroImage'
import Script from 'next/script'
import { isMobile } from 'react-device-detect'
import { useEffect, useState } from 'react'
import Body from '@/components/Body'

export default function Tickets() {
  const [showMobileImage, setShowMobileImage] = useState(true)

  useEffect(() => {
    if (isMobile) {
      setShowMobileImage(true)
    } else {
      setShowMobileImage(false)
    }
  }, [])

  return (
    <>
      {showMobileImage ? (
        <HeroImage src={require('../public/event_poster.jpg')} title="TICKETS" alt="workshop" />
      ) : (
        <HeroImage src={require('../public/underground_facebookbanner.png')} title="TICKETS" alt="workshop" />
      )}

      <div className="container mx-auto">
        <div className="px-4 md:px-0 pt-10 pb-6">
          <h5 className="font-bold text-xl md:text-2xl pb-4">Full pass includes:</h5>
          <ul>
            <li className="pb-2">🔸 Access to all workshops except the masterclass</li>
            <li className="pb-2">🔸 Friday and Saturday parties</li>
            <li className="pb-2">
              🔸 30% off for dancers living outside of Finland. Send an message for discount code.
            </li>
          </ul>

          <h6 className="font-bold text-lg md:text-xl pb-4 mt-6">Confirmed artists:</h6>
          <ul>
            <li className="pb-2">🌟 Igor and Rocio (2h)</li>
            <li className="pb-2">🌟 Cristian and Gabriella (3h)</li>
            <li className="pb-2">🌟 Jordi and Noora (2h)</li>
          </ul>

          <h5 className="font-bold text-xl md:text-2xl pb-6 mt-6">Not included in Full pass:</h5>
          <ul className="pb-8">
            <li>🔸 Masterclass with Igor and Rocio (1h)</li>
          </ul>

          <p className="font-semibold text-neutral-400">Refund policy</p>
          <Body
            mobileLeft
            text="Please note that all purchase are non refundable. In case you change your mind, you are able to change the
            ticket name for 10 euros fee until one week before the event."
          />
        </div>

        <div className="px-4 md:px-0 pb-8">
          <p className="text-neutral-400 pb-2">Organizer</p>
          <p className="mb-4 text-white">SOB Productions</p>

          <p className="text-neutral-400 pb-2">Email</p>
          <div className="mb-4">
            <a href="mailto:sob.helsinki@gmail.com" className="font-semibold">
              sob.helsinki@gmail.com
            </a>
          </div>
        </div>

        {/* Ticket Tailor embedded code */}
        <div className="bg-black pb-14">
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
