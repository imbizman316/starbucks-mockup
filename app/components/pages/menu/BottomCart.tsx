import { Box, Typography } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartStore } from "@/app/store/cartStore";

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
      <Typography sx={{ color: "white" }}>{coffeesInCart.length}</Typography>
      <ShoppingCartIcon sx={{ color: "white", fontSize: "45px" }} />
    </Box>
  );
};

export default BottomCart;
