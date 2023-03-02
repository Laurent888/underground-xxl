import MainTitle from "@/components/MainTitle";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { useEffect } from "react";
import InstagramLogo from "../public/Instagram-Logo.png";
import Body from "@/components/Body";

export default function Contact() {
  return (
    <div className="container mx-auto py-24">
      <MainTitle text="Contact" />

      <Body
        text="Feel free to contact us if you have any questions about the events,
        we'll try to answer as fast as possible!"
      />

      <p className="mb-4">
        <span className="font-bold">Email</span>: sob.helsinki@gmail.com
      </p>
      <p>
        <Link
          href="https://www.instagram.com/sobproductionshki/"
          target="_blank"
        >
          <div className="w-12 h-12">
            <Image
              src={InstagramLogo}
              className="object-cover w-full h-full"
              alt="Instagram logo"
            />
          </div>
        </Link>
      </p>
    </div>
  );
}
