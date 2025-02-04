"use client";

import React from "react";

import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import LocationFinder from "../components/pages/store-locator/LocationFinder";

const Map = dynamic(() => import("../components/pages/store-locator/Map"), {
  ssr: false,
});

function page() {
  return (
    <Box sx={{ display: "flex" }}>
      <LocationFinder />
      <Map />
    </Box>
  );
}

export default page;
