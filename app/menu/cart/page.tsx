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
        backgroundColor: "#f9f9f9",
        gap: 3,
      }}
    >
      {coffeesInCart.map((coffee, index) => (
        <CartItem key={index} coffeeDetail={coffee} />
      ))}
      <Box
        sx={{
          width: "100%",
          maxWidth: "795px",
          paddingX: 6,
          borderRadius: "10px",
          boxShadow: 1,
          // border: "1px solid black",
          backgroundColor: "#ffffff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "#6e6e76", fontSize: "16px" }}>
            Subtotal
          </Typography>
          <Box
            sx={{
              borderBottom: "1px dotted gray",
              width: "100%",
              marginX: 4,
            }}
          />
          <Typography
            sx={{ color: "#25262a", fontWeight: 700, fontSize: "16px" }}
          >
            ${subTotal.toFixed(2)}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "#6e6e76", fontSize: "16px" }}>
            Tax
          </Typography>
          <Box
            sx={{
              borderBottom: "1px dotted gray",
              width: "100%",
              marginX: 4,
            }}
          />
          <Typography
            sx={{ color: "#25262a", fontWeight: 700, fontSize: "16px" }}
          >
            ${tax.toFixed(2)}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
            Total
          </Typography>
          <Box
            sx={{
              borderBottom: "1px dotted gray",
              width: "100%",
              marginX: 4,
            }}
          />
          <Typography
            sx={{ fontSize: "24px", fontWeight: 700, color: "#2e2111" }}
          >
            ${(subTotal + tax).toFixed(2)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CartPage;
