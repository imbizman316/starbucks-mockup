"use client";

import CartItem from "@/app/components/pages/menu/cart/CartItem";
import { useCartStore } from "@/app/store/cartStore";
import { Box } from "@mui/material";
import React from "react";

const CartPage = () => {
  const { coffeesInCart } = useCartStore();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingY: 3,
      }}
    >
      {coffeesInCart.map((coffee, index) => (
        <CartItem key={index} coffeeDetail={coffee} />
      ))}
    </Box>
  );
};

export default CartPage;
