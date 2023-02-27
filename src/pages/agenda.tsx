import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export default function Agenda() {
  return (
    <div className="pt-16 bg-black">
      <section className="container mx-auto flex flex-col items-center">
        <SectionTitle text="Agenda" />

        <p className="mb-12 text-center mx-2">
          Here is an overview of the agenda. It will be subject to changes
        </p>

        <div className="mb-8">
          <SectionTitle bottomSpacing={false} text="Friday" />
          <p className="mt-4">Party until 2am</p>
        </div>

        <div className="mb-8">
          <SectionTitle bottomSpacing={false} text="Saturday" />
          <p className="mt-4">Workshop from 11 to 17</p>
          <p>Party from 21 to 3!</p>
        </div>

        <div className="mb-8">
          <SectionTitle bottomSpacing={false} text="Sunday" />
          <p className="mt-4">Workshop from 13 to 16</p>
        </div>
      </section>
    </div>
  );
}
