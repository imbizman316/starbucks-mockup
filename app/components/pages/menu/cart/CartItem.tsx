import { CartCoffee } from "@/app/types/menus/types";
import { Box, Typography } from "@mui/material";
import React from "react";
import { CoffeeItemCard } from "../CoffeeItemCard";
// import HRDivider from "@/app/components/michelaneous/HRDivider";
import ActionBar from "./ActionBar";

const CartItem = ({ coffeeDetail }: { coffeeDetail: CartCoffee }) => {
  return (
    <Box
      sx={{
        maxWidth: "795px",
        width: "100%",
        paddingX: 6,
        borderRadius: "10px",
        boxShadow: 1,
        // border: "1px solid black",
        backgroundColor: "#ffffff",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CoffeeItemCard
          image={coffeeDetail.image}
          name={coffeeDetail.name}
          id={coffeeDetail.id}
        />
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 700,
            color: "#291f1d",
          }}
        >
          ${coffeeDetail.price} X {coffeeDetail.count}
        </Typography>
        <Box>
          <Typography>{coffeeDetail.toppings.milk}</Typography>
        </Box>
      </Box>
      <ActionBar id={coffeeDetail.id} />
      {/* <HRDivider /> */}
    </Box>
  );
};

export default CartItem;
