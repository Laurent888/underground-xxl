import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import MobileMenuDrawer from './MobileMenuDrawer'
import Navbar from './Navbar'

function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (isMobileMenuOpen) {
      window.document.querySelector('html')?.classList.add('noscroll')
    } else {
      window.document.querySelector('html')?.classList.remove('noscroll')
    }
  }, [isMobileMenuOpen])

  return (
    <div className="bg-black">
      <Navbar onMenuOpen={() => setIsMobileMenuOpen(true)} />
      <MobileMenuDrawer visible={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <div className="h-[56px] md:h-[86px]" />

      {children}
      <Footer />
    </div>
  )
}

export default Layout
