import HeroImage from '@/components/HeroImage'

import Body from '@/components/Body'
import Image from 'next/image'
import PriceRow from '@/components/PriceRow'
import Script from 'next/script'
import Head from 'next/head'

export default function Tickets() {
  return (
    <>
      <Head>
        <title>Underground XXL | Bachata weekend in Helsinki | Tickets</title>
      </Head>
      <HeroImage title="TICKETS" />

      <div className="container mx-auto">
        <section className="px-4 md:px-0 pt-10 pb-6 flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2 ">
            <h5 className="font-bold text-xl md:text-2xl pb-4">Full pass includes:</h5>
            <ul>
              <li className="pb-2">🔸 Access to all workshops except the masterclass</li>
              <li className="pb-2">🔸 Friday and Saturday parties</li>
              <li className="pb-2">
                🔸 30% off for dancers living outside of Finland. Use the discount code &quot;HFUUJK&quot;
              </li>
            </ul>

            <h6 className="font-bold text-lg md:text-xl pb-4 mt-6">Confirmed artists:</h6>
            <ul>
              <li className="pb-2">🌟 Igor and Rocio (2h)</li>
              <li className="pb-2">🌟 Cristian and Gabriella (3h)</li>
              <li className="pb-2">🌟 Alex and Sveti (2h)</li>
              <li className="pb-2">🌟 Hasan (1h)</li>
              <li className="pb-2">🌟 Jordi and Noora (1h)</li>
            </ul>

            <h5 className="font-bold text-xl md:text-2xl pb-6 mt-6">Not included in Full pass:</h5>
            <ul className="pb-8">
              <li>🔸 Masterclass with Igor and Rocio (1h)</li>
            </ul>

            <p className="font-semibold text-neutral-400">Refund policy</p>
            <Body
              mobileLeft
              text="Please note that all purchase are non-refundable. In case you change your mind, you are able to change the
            ticket name on the ticket for a 10 euros fee until one week before the event."
            />
          </div>
          <div className="md:h-[600px] w-full md:w-1/2 md:pl-12 mb-12">
            <Image
              src={require('../public/event_poster.jpg')}
              alt="event poster"
              className="h-full w-full object-contain"
            />
          </div>
        </section>

        <section className="pb-8 mx-4 md:mx-0">
          <h2 className="text-4xl md:text-6xl font-extrabold italic pb-8">PRICES</h2>

          <PriceRow showPerson title="Super Early Bird Couple Pass" price={154}>
            <p className="text-neutral-500 text-sm">
              <span className="line-through">Only 5 couple passes available!</span>
              <br />
              <span className="font-bold text-red-500">SOLD OUT!</span>
            </p>
          </PriceRow>

          <PriceRow showPerson title="Early Bird Couple Pass" price={164}>
            <p className="text-neutral-500 text-sm">
              <span className="line-through">Available only until May 15th!</span>
              <br />
              <span className="font-bold text-red-500">SOLD OUT!</span>
            </p>
          </PriceRow>

          <PriceRow title="Early Bird Full Pass" price={87}>
            <p className="text-neutral-500 text-sm">
              <span className="line-through">Available only until May 15th!</span>
              <br />
              <span className="font-bold text-red-500">SOLD OUT!</span>
            </p>
          </PriceRow>

          <PriceRow title="Full Pass Leader" price={95}>
            <p className="text-neutral-500 text-sm">Get 30% off if you come from abroad!</p>
          </PriceRow>

          <PriceRow title="Full Pass Follower" price={95}>
            <p className="text-neutral-500 text-sm">
              <span className="text-red-500 font-semibold">CLOSED: </span>Follower Pass closed temporarily until we get
              more leaders signing up. This is to keep a balance ratio between followers and leaders 🙏
            </p>
          </PriceRow>

          <PriceRow showPerson title="Couple Pass Leader/Follower" price={180}>
            <p className="text-neutral-500 text-sm">Get 30% off if you come from abroad!</p>
          </PriceRow>

          <PriceRow showPerson title="Party Pass" price={40}>
            <p className="text-neutral-500 text-sm">Access to friday, saturday and sunday parties</p>
          </PriceRow>
        </section>

        {/* Ticket Tailor embedded code */}
        <section className="px-4 md:px-0 pb-14">
          <h2 className="text-4xl md:text-6xl font-extrabold italic">
            TICKETS AVAILABLE <span className="text-orange-600">NOW!</span>
          </h2>
        </section>
        <section className="bg-black pb-14">
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
        </section>

        <section className="px-4 md:px-0 pb-14">
          <p className="text-neutral-400 pb-2">Organizer</p>
          <p className="mb-4 text-white">SOB Productions</p>

          <p className="text-neutral-400 pb-2">Email</p>
          <div className="mb-4">
            <a href="mailto:sob.helsinki@gmail.com" className="font-semibold">
              sob.helsinki@gmail.com
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
