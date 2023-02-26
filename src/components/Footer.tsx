import React from "react";
import Image from "next/image";
import Logo from "../public/sob.jpeg";

function Footer() {
  return (
    <div className="bg-black border-t-2 border-t-gray-900">
      <div className="py-12 container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex flex-col items-center">
          <div className="w-28 h-28">
            <Image src={Logo} style={{ objectFit: "contain" }} alt="sob logo" />
          </div>
          <h3 className="font-bold text-2xl">SOB Productions</h3>
        </div>

        <div className="flex flex-col md:flex-row items-center mt-8 md:mt-0">
          <p className="hover:cursor-pointer hover:opacity-80 md:mr-4">
            Tickets
          </p>
          <p className="hover:cursor-pointer hover:opacity-80 md:mr-4">
            Agenda
          </p>
          <p className="hover:cursor-pointer hover:opacity-80 ">Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
