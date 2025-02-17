import { Box, Typography } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartStore } from "@/app/store/cartStore";
import Link from "next/link";

const BottomCart = () => {
  const { coffeesInCart } = useCartStore();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#1e3932",
        height: "10vh",
        position: "fixed",
        bottom: 0,
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        paddingX: "8vw",
        zIndex: 300,
      }}
    >
      <Link href="/menu/cart" style={{ position: "relative" }}>
        <ShoppingCartIcon sx={{ color: "#02a95b", fontSize: "55px" }} />

        <Typography
          sx={{
            color: "white",
            position: "absolute",
            top: 6,
            left: 22,
            fontWeight: 700,
            fontSize: 20,
          }}
        >
          {coffeesInCart.length > 0 && coffeesInCart.length}
        </Typography>
      </Link>
    </Box>
  );
};

export default BottomCart;
