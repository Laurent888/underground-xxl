import React from "react";

type MainTitleProps = {
  text: string;
  bottomSpacing?: boolean;
};
function MainTitle({ text, bottomSpacing = true }: MainTitleProps) {
  return (
    <h3
      className={`font-extrabold text-2xl md:text-6xl text-center md:text-start ${
        bottomSpacing && "pb-8"
      }`}
    >
      {text}
    </h3>
  );
}

export default MainTitle;
