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
    <Box sx={{}}>
      <Box>
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
