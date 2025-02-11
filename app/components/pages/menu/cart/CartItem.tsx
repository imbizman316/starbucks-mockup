import { Coffee } from "@/app/types/menus/types";
import { Box } from "@mui/material";
import React from "react";
import { CoffeeItemCard } from "../CoffeeItemCard";
import HRDivider from "@/app/components/michelaneous/HRDivider";
import ActionBar from "./ActionBar";

const CartItem = ({ coffeeDetail }: { coffeeDetail: Coffee }) => {
  return (
    <Box
      sx={{
        maxWidth: "795px",
        width: "100%",
      }}
    >
      <CoffeeItemCard
        image={coffeeDetail.image}
        name={coffeeDetail.name}
        id={coffeeDetail.id}
      />
      <ActionBar id={coffeeDetail.id} />
      <HRDivider />
    </Box>
  );
};

export default CartItem;
