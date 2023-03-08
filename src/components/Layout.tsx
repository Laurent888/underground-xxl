import React, { useEffect, useState } from 'react'
import { consent } from 'nextjs-google-analytics'

import { useCookies } from 'react-cookie'
import ConsentBar from './ConsentBar'
import Footer from './Footer'
import MobileMenuDrawer from './MobileMenuDrawer'
import Navbar from './Navbar'

function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [consentBarVisible, setConsentBarVisile] = useState(true)
  const [cookies, setCookie] = useCookies(['consentCookie'])

  useEffect(() => {
    const consentCookie = cookies.consentCookie
    if (consentCookie != null) {
      setConsentBarVisile(false)
    }
    if (consentCookie === 'rejected') {
      consent({ params: 'update', arg: { ad_storage: 'denied', analytics_storage: 'denied' } })
    }
  }, [cookies.consentCookie])

  useEffect(() => {
    if (isMobileMenuOpen) {
      window.document.querySelector('html')?.classList.add('noscroll')
    } else {
      window.document.querySelector('html')?.classList.remove('noscroll')
    }
  }, [isMobileMenuOpen])

  const approveConsent = () => {
    setCookie('consentCookie', 'accepted')
    setConsentBarVisile(false)
  }

  const rejectConsent = () => {
    setCookie('consentCookie', 'rejected')
    consent({ params: 'update', arg: { ad_storage: 'denied', analytics_storage: 'denied' } })
    setConsentBarVisile(false)
  }

  return (
    <div className="bg-black">
      <Navbar onMenuOpen={() => setIsMobileMenuOpen(true)} />
      <MobileMenuDrawer visible={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <div className="h-[56px] md:h-[86px]" />

      {children}
      <Footer />
      <ConsentBar visible={consentBarVisible} onAccept={approveConsent} onReject={rejectConsent} />
    </div>
  )
}

export default Layout
