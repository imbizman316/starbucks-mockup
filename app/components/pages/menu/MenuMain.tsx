"use client";

import { useCoffeeStore } from "@/app/store/coffeeStore";
import { Box, CircularProgress, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CoffeeItemCard = ({ image, name }: { image: string; name: string }) => {
  return (
    <Box>
      <Image src={image} alt={name} width={100} height={100} />
      <Typography>{name}</Typography>
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
      <Typography>Menu</Typography>
      <Typography>Coffees</Typography>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Box>
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
