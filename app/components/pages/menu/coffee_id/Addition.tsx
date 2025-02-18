import HRDivider from "@/app/components/michelaneous/HRDivider";
import { Box, MenuItem, TextField, Typography } from "@mui/material";
import React from "react";

function Addition() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "300px",
        paddingX: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 600,
        }}
      >
        Toppings
      </Typography>
      <HRDivider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <TextField
          label={`Milk (small cup)`}
          select
          variant="outlined"
          sx={{ width: 300 }}
        >
          <MenuItem>1</MenuItem>
          <MenuItem>2</MenuItem>
          <MenuItem>3</MenuItem>
          <MenuItem>4</MenuItem>
          <MenuItem>5</MenuItem>
        </TextField>
        <TextField
          label="Sugar (tea spoon)"
          select
          variant="outlined"
          sx={{ width: 300 }}
        >
          <MenuItem>1</MenuItem>
          <MenuItem>2</MenuItem>
          <MenuItem>3</MenuItem>
          <MenuItem>4</MenuItem>
          <MenuItem>5</MenuItem>
        </TextField>
        <TextField
          label="Cream (small cup)"
          select
          variant="outlined"
          sx={{ width: 300 }}
        >
          <MenuItem>1</MenuItem>
          <MenuItem>2</MenuItem>
          <MenuItem>3</MenuItem>
          <MenuItem>4</MenuItem>
          <MenuItem>5</MenuItem>
        </TextField>
      </Box>
    </Box>
  );
}

export default Addition;
