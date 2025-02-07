"use client";

import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Coffee } from "../types/menus/types";

function MenuPage() {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  async function fetchCoffeeData() {
    const res = await fetch("/api/getCoffee");
    const coffees = await res.json();
    setCoffees(coffees);
  }

  useEffect(() => {
    fetchCoffeeData();
  }, []);

  return <Box>{coffees && coffees.length > 0 && coffees[0].name}</Box>;
}

export default MenuPage;
