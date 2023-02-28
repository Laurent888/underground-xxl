import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black">
      <Navbar />

      <div className="h-[56px] md:h-[86px]" />

      {children}
      <Footer />
    </div>
  );
}

export default Layout;
