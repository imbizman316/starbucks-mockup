"use client";

import { Box } from "@mui/material";
import React, { useRef } from "react";
import LeftSideMenus from "../components/pages/menu/LeftSideMenus";
import MenuMain from "../components/pages/menu/MenuMain";

function MenuPage() {
  const sectionRef = useRef<(HTMLParagraphElement | null)[]>([]); // Fix here

  const scrollToSection = (index: number) => {
    if (sectionRef.current[index]) {
      const offset = 60;
      const top =
        sectionRef.current[index]!.getBoundingClientRect().top +
        window.scrollY -
        offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <LeftSideMenus scrollToSection={scrollToSection} />
      <MenuMain sectionRef={sectionRef} />
    </Box>
  );
}

export default MenuPage;
