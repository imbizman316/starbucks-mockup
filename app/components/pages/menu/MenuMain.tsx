"use client";

import { useCoffeeStore } from "@/app/store/coffeeStore";
import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import HRDivider from "../../michelaneous/HRDivider";
import { CoffeeItemCard } from "./CoffeeItemCard";

const MenuMain = () => {
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
        paddingX: 7,
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "24px",
          color: "#242b3b",
          paddingY: 3,
        }}
      >
        Menu
      </Typography>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "19px",
          color: "#50524f",
          paddingBottom: 2,
        }}
      >
        Coffees
      </Typography>
      <HRDivider />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xl: "1fr 1fr",
              lg: "1fr 1fr",
              md: "1fr 1fr",
              sm: "1fr",
              xs: "1fr",
            },
            gap: 2,
          }}
        >
          {coffees.map((coffee) => (
            <CoffeeItemCard
              key={coffee.id}
              name={coffee.name}
              image={coffee.image}
              id={coffee.id}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MenuMain;
