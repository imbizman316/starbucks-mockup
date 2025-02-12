"use client";

import React, { useState } from "react";

import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import LocationFinder from "../components/pages/store-locator/LocationFinder";
import { Options } from "../types/store_locator/types";

const Map = dynamic(() => import("../components/pages/store-locator/Map"), {
  ssr: false,
});

function StoreLocatorPage() {
  // const [Location, SetLocation] = useState("Seoul");
  const [option, setOption] = useState<Options>({ option: "pickup" });

  // : [
  //   Options,
  //   React.Dispatch<React.SetStateAction<Options>>
  // ]

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "column" },
        // alignItems: "stretch",
        alignItems: "start",
        height: "70vh",
        width: "70vh",
        p: 0.1,
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "35%",
            sm: "35%",
          },
        }}
      >
        <LocationFinder option={option} setOption={setOption} />
      </Box>
      <Box sx={{ width: { xs: "100%", md: "35%" }, p: 2 }}>
        <Map />
      </Box>
    </Box>
  );
}

export default StoreLocatorPage;
