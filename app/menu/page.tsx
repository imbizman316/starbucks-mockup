"use client";

import { Box } from "@mui/material";
import React, { useEffect } from "react";

import { useCoffeeStore } from "../store/coffeeStore";

function MenuPage() {
  const { coffees, fetchCoffees } = useCoffeeStore();

  useEffect(() => {
    if (coffees.length === 0) fetchCoffees();
  }, [coffees, fetchCoffees]);

  return (
    <Box>
      {coffees &&
        coffees.length > 0 &&
        coffees.map((coffee) => <div key={coffee.id}>{coffee.name}</div>)}
    </Box>
  );
}

export default MenuPage;
