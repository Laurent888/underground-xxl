import Link from "next/link";
import Image from "next/image";
import React from "react";
import Logo from "../public/underground_logo.png";
import { TICKETING_URL } from "@/utils/constants";

function Navbar() {
  return (
    <nav className="fixed w-full bg-black z-50">
      <div className="md:container md:mx-auto px-2">
        <div className="flex flex-row items-center justify-center md:justify-between">
          <Link href="/" className="justify-center items-center">
            <div className="w-32 py-2 md:w-44">
              <Image
                src={Logo}
                alt="logo"
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                }}
                loading="eager"
              />
            </div>
          </Link>

          <ul className="hidden md:flex flex-row items-center invisible md:visible">
            <Link href="/agenda">
              <li className="text-white font-semibold hover:cursor-pointer py-6 md:py-8 px-6 hover:bg-orange-600 transition duration-250">
                Agenda
              </li>
            </Link>
            <Link href={TICKETING_URL} target="_blank">
              <li className="text-white font-semibold hover:cursor-pointer py-6 md:-py-8 px-6 hover:bg-orange-600 transition duration-250">
                Tickets
              </li>
            </Link>
            <li className="text-white font-semibold hover:cursor-pointer py-6 md:-py-8 px-6 hover:bg-orange-600 transition duration-250">
              Contacts
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
