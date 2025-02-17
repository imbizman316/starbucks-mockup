"use client";

import { Box } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  id: number;
  social: string;
  icon: React.JSX.Element;
  link: string;
}

function SocialOneIcon({ icon }: { icon: Props }) {
  const [mouseHold, setMouseHold] = useState(false);

  return (
    <Box
      sx={{
        ":hover": { backgroundColor: "#bebebe" },
        // transitionDuration: "0.8s",
        backgroundColor: "white",
        borderRadius: "100%",
        width: 50,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      key={icon.id}
    >
      <Box
        sx={{
          backgroundColor: "#202020",
          borderRadius: "100%",
          width: mouseHold ? 32 : 36,
          height: mouseHold ? 32 : 36,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transitionDuration: "0.1s",
        }}
        onMouseDown={() => setMouseHold(true)}
        onMouseUp={() => setMouseHold(false)}
        onMouseLeave={() => setMouseHold(false)}
      >
        <Link href={icon.link}>{icon.icon}</Link>
      </Box>
    </Box>
  );
}

export default SocialOneIcon;
