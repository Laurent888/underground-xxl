import MainTitle from "@/components/MainTitle";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";

export default function Contact() {
  return (
    <div className="container mx-auto">
      <MainTitle text="Contact" />
      <p>Email: sob.helsinki@gmail.com</p>
      <p>
        Instagram:{" "}
        <Link
          href="https://www.instagram.com/sobproductionshki/"
          target="_blank"
        >
          <span className="underline font-bold">@sobproductionshki</span>
        </Link>
      </p>
    </div>
  );
}
