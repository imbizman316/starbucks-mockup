"use client";

import HRDivider from "@/app/components/michelaneous/HRDivider";
import { Sizes, sizes } from "@/app/data/pages/menu/data";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import SizeItem from "./SizeItem";

const SizeOptions = () => {
  const [currentSize, setCurrentSize] = useState<Sizes | string>(Sizes.grande);

  return (
    <Box>
      <Typography
        sx={{
          fontSize: "19px",
          fontWeight: 600,
        }}
      >
        Size options
      </Typography>
      <HRDivider />
      <Box sx={{ display: "flex", gap: 2 }}>
        {sizes.map((size, index: number) => (
          <SizeItem
            size={size}
            key={index}
            currentSize={currentSize}
            setCurrentSize={setCurrentSize}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SizeOptions;
