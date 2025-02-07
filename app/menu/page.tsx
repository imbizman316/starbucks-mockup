"use client";

import { Box } from "@mui/material";
import React from "react";
import LeftSideMenus from "../components/pages/menu/LeftSideMenus";
import MenuMain from "../components/pages/menu/MenuMain";

function MenuPage() {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <LeftSideMenus />
      <MenuMain />
    </Box>
  );
}

export default MenuPage;
