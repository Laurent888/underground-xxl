import React from "react";

type BodyProps = {
  text: string;
  bottomSpacing?: boolean;
  className?: string;
};
function Body({ text, bottomSpacing = true, className }: BodyProps) {
  return (
    <p
      className={`font-normal text-lg md:xl text-center md:text-start ${
        bottomSpacing && "pb-4"
      } ${className}`}
    >
      {text}
    </p>
  );
}

export default Body;
