import React from "react";

type SectionTitleProps = {
  text: string;
  bottomSpacing?: boolean;
};
function SectionTitle({ text, bottomSpacing = true }: SectionTitleProps) {
  return (
    <h3
      className={`font-bold text-xl md:text-4xl text-center md:text-start ${
        bottomSpacing && "pb-8"
      }`}
    >
      {text}
    </h3>
  );
}

export default SectionTitle;
