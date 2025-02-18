"use client";

import React, { Dispatch, SetStateAction, useState } from "react";

interface Props {
  customState: boolean;
  customSetState: Dispatch<SetStateAction<boolean>>;
}

function AnimatedHamburger({ customState, customSetState }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  const [playSecond, setPlaySecond] = useState(false);

  const handleClick = () => {
    customSetState(!customState);

    if (!isClicked) {
      setIsClicked(true);
      setTimeout(() => setPlaySecond(true), 400);
    } else {
      setPlaySecond(false);
      setTimeout(() => setIsClicked(false), 400);
    }
  };

  return (
    <div
      className="border-black border-[1px] flex flex-col items-center rounded-full hover:bg-slate-200 overflow-hidden justify-center min-w-[62px] min-h-[62px] lg:hidden"
      onClick={handleClick}
      style={{
        transitionDuration: "0.4s",
        fontSize: "40px",
        cursor: "pointer",
        marginRight: "16px",
      }}
    >
      <div
        className="min-w-[54px] min-h-[54px] flex flex-col items-center justify-center"
        style={{
          gap: isClicked ? 0 : 7,
          transitionDuration: "0.4s",
        }}
      >
        <hr
          className="w-10 border-black border-[1px]"
          style={{
            rotate: playSecond ? "45deg" : "0deg",
            transitionDuration: "0.4s",
          }}
        />
        <hr
          className="w-10 border-black border-[1px]"
          style={{
            opacity: isClicked ? "0%" : "100%",
            transitionDuration: "0.4s",
          }}
        />
        <hr
          className="w-10 border-black border-[1px]"
          style={{
            rotate: playSecond ? "-45deg" : "0deg",
            transitionDuration: "0.4s",
          }}
        />
      </div>
    </div>
  );
}

export default AnimatedHamburger;
