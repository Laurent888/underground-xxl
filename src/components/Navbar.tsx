import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="fixed w-full bg-black z-50">
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-white py-8 container font-extrabold italic md:ml-0 ml-4">
            <Link href="/">UNDERGROUND XXL</Link>
          </h3>
          <ul className="flex flex-row items-center invisible md:visible">
            <li className="text-white font-semibold hover:cursor-pointer py-8 px-6 hover:bg-orange-600 transition duration-250">
              Agenda
            </li>
            <li className="text-white font-semibold hover:cursor-pointer py-8 px-6 hover:bg-orange-600 transition duration-250">
              Tickets
            </li>
            <li className="text-white font-semibold hover:cursor-pointer py-8 px-6 hover:bg-orange-600 transition duration-250">
              Contacts
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
