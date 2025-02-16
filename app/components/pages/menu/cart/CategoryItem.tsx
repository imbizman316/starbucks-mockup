import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Category, Coffee } from "@/app/types/menus/types";
import { CoffeeItemCard } from "../CoffeeItemCard";

const CategoryItem = ({
  category,
  coffees,
}: {
  category: Category;
  coffees: Coffee[];
}) => {
  const [categoryCoffees, setCategoryCoffees] = useState<Coffee[] | []>([]);

  useEffect(() => {
    const tempCoffees = coffees.filter(
      (coffee) => coffee.category === category.id
    );

    setCategoryCoffees(tempCoffees);
  }, [coffees, category]);

  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "24px",
          color: "#50524f",
          paddingBottom: 2,
        }}
      >
        {category.category}
      </Typography>
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
        {categoryCoffees?.map((coffee) => (
          <CoffeeItemCard
            key={coffee.id}
            name={coffee.name}
            image={coffee.image}
            id={coffee.id}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CategoryItem;
