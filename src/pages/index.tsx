import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
import { isMobile } from "react-device-detect";
import SectionTitle from "@/components/SectionTitle";
import MainButton from "@/components/MainButton";

/**
 * Section title: 2xl
 * Body: lg;
 */
const CARD_WIDTH = isMobile ? 392 : 480;
export default function Home() {
  const [scrollIndex, setScrollIndex] = useState(0);

  return (
    <>
      <div className="bg-black w-screen">
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

            <li className="pb-8 md:pb-14">
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
            <MainButton text="Agenda" href="/agenda" onClick={() => null} />
          </div>
        </div>

        {/* HEADLINE */}
        {/* <div className="h-96 flex flex-col justify-center items-center bg-inherit px-4">
          <SectionTitle text="What is the Underground XXL" />
          <p className="text-gray-50 text-lg md:text-2xl text-center md:text-left pb-8">
            We are a commmunity driven bachata dancers who want to organize an
            awesome and affordable event with international artists{" "}
          </p>
          <MainButton text="Tickets" onClick={() => null} />
        </div> */}

        {/* ARTISTS */}
        <section className="bg-inherit pb-16 mt-12 md:mt-24">
          <div className="container mx-auto flex flex-col items-center md:items-start pb-10 container text-center ">
            <SectionTitle text="Artists at the Underground XXL" />
            <p className="text-gray-50 text-lg text-center md:text-2xl">
              A awesome line-up is waiting for you!
            </p>
          </div>

          <div
            className={`grid grid-flow-col mt-4 mb-4 pl-4 md:pl-32`}
            style={{
              transform: `translate(-${scrollIndex * CARD_WIDTH}px)`,
              transition: `transform 300ms ease-in-out`,
            }}
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

          <div className="flex flex-row justify-center md:justify-end container">
            <RoundButton
              type="left"
              onClick={() => {
                if (isMobile) {
                  if (scrollIndex > 0) setScrollIndex((prev) => prev - 1);
                } else {
                  if (scrollIndex > 0) setScrollIndex((prev) => prev - 1);
                }
              }}
            />
            <div className="w-4" />
            <RoundButton
              type="right"
              onClick={() => {
                if (isMobile) {
                  if (scrollIndex < 4) setScrollIndex((prev) => prev + 1);
                } else {
                  if (scrollIndex < 1) setScrollIndex((prev) => prev + 1);
                }
              }}
            />
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="pb-24">
          <div className="container mx-auto flex flex-col items-center md:items-start">
            <SectionTitle text="Are you ready to join us?" />
            <p className="pb-8 text-center md:text-start">
              Get ready for the event of the year in Helsinki with our
              incredible line-up. If you are coming from abroad, send us a
              message by email to get your discount code!
            </p>
            <MainButton
              text="Tickets"
              href="https://buytickets.at/sobproductions/862282"
            />
          </div>
        </section>

        {/* ABOUT SOB */}
        <section className="bg-inherit">
          <div className="container md:mx-auto md:h-96 flex flex-col md:flex-row pb-12">
            <div className="md:w-1/2 h-full">
              <Image
                src={PartyImage}
                alt="crowd"
                style={{ objectFit: "cover" }}
                className="h-full"
              />
            </div>
            <div className="md:w-1/2 md:pl-12 pt-8 md:pt-0 px-2 md:px-0">
              <SectionTitle text="Summer Outdoor Bachata aka SOB" />
              <p className="md:text-start text-center">
                We organize monthly bachata events in Helsinki since 2019 that
                gather all the dancers from Helsinki area. Checkout out intagram
                account to get a feeling of our events.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
