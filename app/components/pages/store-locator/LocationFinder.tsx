import { Box, Button, Input } from "@mui/material";
import React from "react";

function LocationFinder() {
  return (
    <Box
      sx={{
        flex: 1,
      }}
    >
      <Box>
        <Button>Pickup</Button>
        <Button>Delivery</Button>
      </Box>
      <Box>
        <Input placeholder="Find a store" />
        <Button>Filter</Button>
      </Box>
    </Box>
  );
}

export default LocationFinder;
