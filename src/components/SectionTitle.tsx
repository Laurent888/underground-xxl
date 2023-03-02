import React from "react";

type SectionTitleProps = {
  text: string;
  bottomSpacing?: boolean;
  mobileLeft?: boolean;
  small?: boolean;
};
function SectionTitle({
  text,
  small,
  mobileLeft = false,
  bottomSpacing = true,
}: SectionTitleProps) {
  const smallText = "text-xl md:text-2xl";
  const normalText = "text-2xl md:text-4xl";

  return (
    <h3
      className={`font-bold ${
        small ? smallText : normalText
      } text-center md:text-start ${bottomSpacing && "pb-8"} ${
        mobileLeft && "text-start"
      }`}
    >
      {text}
    </h3>
  );
}

export default SectionTitle;
