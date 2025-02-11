"use client";

import CartItem from "@/app/components/pages/menu/cart/CartItem";
import { useCartStore } from "@/app/store/cartStore";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const CartPage = () => {
  const { coffeesInCart } = useCartStore();
  const [subTotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    let tempSubTotal = 0;
    coffeesInCart.forEach((coffee) => (tempSubTotal += coffee.price));

    setSubTotal(tempSubTotal);
  }, [coffeesInCart]);

  useEffect(() => {
    setTax(subTotal * 0.07);
  }, [subTotal]);

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
      <Box>
        <Box>
          <Typography>Subtotal</Typography>
          <Typography>${subTotal.toFixed(2)}</Typography>
        </Box>
        <Box>
          <Typography>Tax</Typography>
          <Typography>${tax.toFixed(2)}</Typography>
        </Box>
        <Box>
          <Typography>Total</Typography>
          <Typography>${(subTotal + tax).toFixed(2)}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CartPage;
