import React, { useState } from 'react'
import Footer from './Footer'
import MobileMenuDrawer from './MobileMenuDrawer'
import Navbar from './Navbar'

function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
