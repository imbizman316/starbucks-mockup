import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Category, Coffee } from "@/app/types/menus/types";
import { CoffeeItemCard } from "../CoffeeItemCard";
import HRDivider from "@/app/components/michelaneous/HRDivider";

const CategoryItem = ({
  category,
  coffees,
  index,
  sectionRef,
}: {
  category: Category;
  coffees: Coffee[];
  index: number;
  sectionRef: React.RefObject<(HTMLParagraphElement | null)[]>; // Fix type here
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
        component="p"
        sx={{
          fontWeight: 700,
          fontSize: "24px",
          color: "#50524f",
          paddingBottom: 2,
        }}
        ref={(el) => {
          if (el) {
            sectionRef.current[index] = el;
          }
        }}
      >
        {category.category}
      </Typography>
      <HRDivider />
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
