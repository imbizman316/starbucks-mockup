"use client";

import { useCoffeeStore } from "@/app/store/coffeeStore";
import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import HRDivider from "../../michelaneous/HRDivider";
import { useCategoriesStore } from "@/app/store/categoriesStore";
import CategoryItem from "./cart/CategoryItem";

const MenuMain = ({
  sectionRef,
}: {
  sectionRef: React.RefObject<(HTMLParagraphElement | null)[]>;
}) => {
  //This is where I fetch categories.
  const { categories, fetchCategories } = useCategoriesStore();

  useEffect(() => {
    async function fetchSequence() {
      if (categories.length === 0) await fetchCategories();
    }

    fetchSequence();
  }, [categories, fetchCategories]);
  //.......................................//

  //This is where I fetch coffees
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
  //.......................................//

  return (
    <Box
      sx={{
        paddingX: 7,
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "28px",
          color: "#242b3b",
          paddingY: 3,
        }}
      >
        Menu
      </Typography>

      <HRDivider />
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "50vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          {categories.map((category, index) => (
            <CategoryItem
              category={category}
              key={index}
              coffees={coffees}
              sectionRef={sectionRef}
              index={index}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MenuMain;
