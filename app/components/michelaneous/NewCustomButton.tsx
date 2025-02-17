"use client";

import { Box } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

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
  const [isMouseDown, setIsMouseDown] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "150px",
      }}
    >
      <Link
        style={{
          backgroundColor: color,
          color: fontcolor,
          fontSize: isMouseDown ? "12px" : fontsize,
          padding: "7px 16px",
          borderRadius: "50px",
          border: "2px solid black",
          fontWeight: 700,
          height: isMouseDown ? "30px" : "40px",
          width: isMouseDown ? "130px" : "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        href={link}
        className="custom-button"
        onMouseDown={() => setIsMouseDown(true)}
        onMouseUp={() => setIsMouseDown(false)}
      >
        {text}
      </Link>
    </Box>
  );
}

export default NewCustomButton;
