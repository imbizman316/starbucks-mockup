import { Box, Button, Input } from "@mui/material";
import React from "react";
import CustomButton from "../../michelaneous/CustomButton";
import { Options } from "@/app/types/store_locator/types";

function LocationFinder({
  option,
  setOption,
}: {
  option: Options;
  setOption: React.Dispatch<React.SetStateAction<Options>>;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          border: "1px solid #1f654b",
          borderRadius: "50px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CustomButton option={option} setOption={setOption}>
          pickup
        </CustomButton>
        <CustomButton option={option} setOption={setOption}>
          delivery
        </CustomButton>
      </Box>
      <Box>
        <Input placeholder="Find a store" />
        <Button>Filter</Button>
      </Box>
    </Box>
  );
}

export default LocationFinder;
