import HRDivider from "@/app/components/michelaneous/HRDivider";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const SizeOptions = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "19px",
          fontWeight: 600,
        }}
      >
        Size options
      </Typography>
      <HRDivider />
      <Box sx={{ display: "flex", gap: 2 }}>
        <Image
          src={"/images/menu/product/cupsize_large.svg"}
          alt="size-grande"
          width={100}
          height={100}
        />
        <Image
          src={"/images/menu/product/cupsize_large.svg"}
          alt="size-grande"
          width={100}
          height={100}
        />
        <Image
          src={"/images/menu/product/cupsize_large.svg"}
          alt="size-grande"
          width={100}
          height={100}
        />
      </Box>
    </Box>
  );
};

export default SizeOptions;
