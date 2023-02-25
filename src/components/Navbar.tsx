import React from "react";

function Navbar() {
  return (
    <nav className="fixed w-full bg-black">
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-white py-8 container">UNDERGROUND XXL</h3>
          <ul className="flex flex-row items-center">
            <li className="text-white">Info</li>
            <li className="text-white">Tickets</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
