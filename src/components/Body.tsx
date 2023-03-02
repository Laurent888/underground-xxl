import React from "react";

type BodyProps = {
  text: string;
  mobileLeft?: boolean;
  bottomSpacing?: boolean;
  className?: string;
};
function Body({
  text,
  mobileLeft = false,
  bottomSpacing = true,
  className,
}: BodyProps) {
  const paddingBottom = (() => {
    let paddingBottomClass = "";
    if (bottomSpacing) {
      paddingBottomClass = "pb-8";
    } else {
      paddingBottomClass = "pb-4";
    }
    return paddingBottomClass;
  })();

  return (
    <p
      className={`font-normal text-base md:xl text-center md:text-start ${paddingBottom} ${
        mobileLeft && "text-start"
      } ${className}`}
    >
      {text}
    </p>
  );
}

export default Body;
