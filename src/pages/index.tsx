import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import PartyImage from "../public/party.jpg";
import MiguelSunsire from "../public/miguelSunsire.jpeg";
import IgorRocio from "../public/igorRocio.jpg";
import CristianGabriella from "../public/cristianGabriella.jpeg";
import JordiNoora from "../public/jordiNoora.jpg";
import LaurentDJ from "../public/laurentTram.png";
import Hero from "@/components/Hero";
import ArtistCard from "@/components/ArtistCard";
import { useState } from "react";
import RoundButton from "@/components/RoundButton";

export default function Home() {
  const [scrollIndex, setScrollIndex] = useState(false);

  return (
    <>
      <div className="h-screen bg-black w-screen">
        {/* HERO */}
        <div style={{ height: "86px" }} />
        <Hero />

        {/* SECTION INFO */}
        <div className="md:h-200 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-gray-300">
            <Image
              src={PartyImage}
              style={{ objectFit: "cover" }}
              className="h-full w-full"
              alt="festival flyer"
            />
          </div>
          <div className="w-full md:w-1/2 bg-black p-10 md:py-24 md:px-24">
            <h5 className="text-gray-50 text-lg md:text-2xl pb-4 font-bold">
              HELSINKI, FINLAND
            </h5>
            <h3 className="text-gray-50 text-3xl  md:text-6xl font-bold">
              1 - 3 SEPTEMBER 2023
            </h3>

            <li>
              <ul className="text-gray-300 font-semibold text-xl md:text-2xl pb-4">
                8 hours workshops
              </ul>
              <ul className="text-gray-300 font-semibold text-xl md:text-2xl pb-4">
                2 hours masterclass
              </ul>
              <ul className="text-gray-300 font-semibold text-xl md:text-2xl pb-4">
                2 parties
              </ul>
              <ul className="text-gray-300 font-semibold text-xl md:text-2xl pb-4">
                Taxi dancers
              </ul>
            </li>
          </div>
        </div>

        {/* HEADLINE */}
        <div className="h-96 flex flex-col justify-center items-center bg-inherit px-4">
          <h2 className="text-gray-50 text-2xl md:text-4xl font-bold pb-4">
            What is the Underground XXL
          </h2>
          <p className="text-gray-50 text-xl md:text-2xl text-center md:text-left">
            We are a commmunity driven bachata dancers who want to organize an
            awesome and affordable event with international artists{" "}
          </p>
        </div>

        {/* ARTISTS */}
        <section className="bg-inherit pb-16">
          <div className=" flex flex-col pb-10 container mx-auto">
            <h2 className="text-gray-50 text-4xl font-bold pb-4">
              Artists at the Underground XXL
            </h2>
            <p className="text-gray-50 text-2xl">
              A awesome line-up is waiting for you!
            </p>
          </div>

          <div
            className={`grid grid-flow-col mt-10 mb-6 pl-4 md:pl-32 ${
              scrollIndex ? "scrollArtistsRight" : "scrollArtistsOrigin"
            }`}
          >
            <ArtistCard
              source={MiguelSunsire}
              alt="miguel and sunsire"
              name="Miguel & Sunsire"
            />
            <ArtistCard
              source={IgorRocio}
              alt="Igor and Rocio"
              name="Igor & Rocio"
            />
            <ArtistCard
              source={CristianGabriella}
              alt="Cristian and Gabriella"
              name="Cristian & Gabriella"
            />
            <ArtistCard
              source={JordiNoora}
              alt="Jordi & Noora"
              name="Jordi & Noora"
            />
            <ArtistCard source={LaurentDJ} alt="DJ Laurent" name="DJ Laurent" />
          </div>

          <div className="flex flex-row justify-end container">
            <RoundButton type="left" onClick={() => setScrollIndex(false)} />
            <div className="w-4" />
            <RoundButton
              type="right"
              onClick={() => {
                setScrollIndex(true);
              }}
            />
          </div>
        </section>
      </div>
    </>
  );
}
