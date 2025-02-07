"use client";

import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useCoffeeStore } from "../store/coffeeStore";
import LeftSideMenus from "../components/pages/menu/LeftSideMenus";
import MenuMain from "../components/pages/menu/MenuMain";

function MenuPage() {
  const { coffees, fetchCoffees } = useCoffeeStore();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchSequence() {
      setIsLoading(true);

      if (coffees.length === 0) await fetchCoffees();

      setIsLoading(false);
    }

    fetchSequence();
  }, [coffees, fetchCoffees]);

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <LeftSideMenus />
      {isLoading ? <CircularProgress /> : <MenuMain />}
    </Box>
  );
}

export default MenuPage;
