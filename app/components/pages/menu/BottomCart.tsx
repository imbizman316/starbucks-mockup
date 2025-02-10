import { Box } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const BottomCart = () => {
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
      <ShoppingCartIcon sx={{ color: "white", fontSize: "45px" }} />
    </Box>
  );
};

export default BottomCart;
