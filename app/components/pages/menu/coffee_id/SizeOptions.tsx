"use client";

import HRDivider from "@/app/components/michelaneous/HRDivider";
import { Sizes, sizes } from "@/app/data/pages/menu/data";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import SizeItem from "./SizeItem";

const SizeOptions = () => {
  const [currentSize, setCurrentSize] = useState<Sizes | string>(Sizes.grande);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const sharedSize = 85;

  return (
    <Box>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 600,
        }}
      >
        Size options
      </Typography>
      <HRDivider />
      <Box sx={{ display: "flex", position: "relative" }}>
        {sizes.map((size, index: number) => (
          <SizeItem
            size={size}
            key={index}
            currentSize={currentSize}
            setCurrentSize={setCurrentSize}
            setCurrentIndex={setCurrentIndex}
            index={index}
            sharedSize={sharedSize}
          />
        ))}
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "#d4e9e2",
            width: sharedSize,
            height: sharedSize,
            borderRadius: "100%",
            border: "solid 2px #105840",
            top: 0,
            left: currentIndex * sharedSize,
            zIndex: 0,
            transitionDuration: "0.5s",
          }}
        />
      </Box>
    </Box>
  );
};

export default SizeOptions;
