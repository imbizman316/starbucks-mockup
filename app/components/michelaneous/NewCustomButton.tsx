import Link from "next/link";
import React from "react";

interface Props {
  color: string;
  link: string;
  fontsize?: number;
  fontcolor: string;
  text: string;
}

function NewCustomButton({
  color,
  link,
  fontsize = 15,
  fontcolor,
  text,
}: Props) {
  return (
    <Link
      style={{
        backgroundColor: color,
        color: fontcolor,
        fontSize: fontsize,
        padding: "7px 16px",
        borderRadius: "50px",
        border: "2px solid black",
      }}
      href={link}
    >
      {text}
    </Link>
  );
}

export default NewCustomButton;
