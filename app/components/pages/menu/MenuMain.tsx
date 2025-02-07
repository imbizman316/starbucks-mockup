"use client";

import { useCoffeeStore } from "@/app/store/coffeeStore";
import { Box, CircularProgress, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import HRDivider from "../../michelaneous/HRDivider";

const CoffeeItemCard = ({ image, name }: { image: string; name: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: 80,
          height: 80,
          overflow: "hidden",
          borderRadius: "100%",
        }}
      >
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="scale-[180%] translate-y-4"
        />
      </Box>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "16px",
          color: "##2f2325",
          textTransform: "capitalize",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

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
    <Box>
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
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          {coffees.map((coffee) => (
            <CoffeeItemCard
              key={coffee.id}
              name={coffee.name}
              image={coffee.image}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MenuMain;
