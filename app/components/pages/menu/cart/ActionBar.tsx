import { Box } from "@mui/material";
import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useCartStore } from "@/app/store/cartStore";

const ActionBar = ({ id }: { id: string }) => {
  const { removeFromCart } = useCartStore();

  return (
    <Box>
      <DeleteOutlineIcon
        onClick={() => removeFromCart(id)}
        sx={{
          cursor: "pointer",
        }}
      />
    </Box>
  );
};

export default ActionBar;
