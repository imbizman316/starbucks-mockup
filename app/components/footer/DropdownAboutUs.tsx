"use client";

import { aboutUsData } from "@/app/data/footer/data";
import { MainMenus } from "@/app/types/footer/types";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const MainTitle = ({ data }: { data: MainMenus }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box
      display="flex"
      alignItems="start"
      justifyContent="space-between"
      onClick={() => setMenuOpen(!menuOpen)}
      sx={{
        cursor: "pointer",
      }}
    >
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 560,
          letterSpacing: 1,
          color: "#695844",
          marginBottom: 3,
        }}
      >
        {data.mainTitle}
      </Typography>
      <KeyboardArrowDownIcon
        sx={{
          transform: `rotate(${menuOpen ? "180deg" : "0deg"})`,
          transition: "transform 0.5s ease-in-out",
        }}
      />
    </Box>
  );
};

const DropdownAboutUs = () => {
  return (
    <Box width="100%">
      {aboutUsData.map((data, index) => (
        <MainTitle data={data} key={index} />
      ))}
    </Box>
  );
};

export default DropdownAboutUs;
