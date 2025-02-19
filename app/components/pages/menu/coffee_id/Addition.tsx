import HRDivider from "@/app/components/michelaneous/HRDivider";
import { Toppings } from "@/app/types/menus/types";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";

function Addition() {
  const [toppings, setToppings] = useState<Toppings>({
    milk: 2,
    sugar: 0,
    cream: 0,
  });

  function handleChange(e) {
    console.log(e.target.name);
    console.log(e.target.value);

    setToppings({ ...toppings, [e.target.name]: Number(e.target.value) });
  }

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
        <Select
          label={`Milk (small cup)`}
          variant="outlined"
          sx={{ width: 300 }}
          name="milk"
          onChange={handleChange}
          value={toppings.milk}
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
        {/* <TextField
          label="Sugar (tea spoon)"
          select
          variant="outlined"
          sx={{ width: 300 }}
          id="sugar"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </TextField>
        <TextField
          label="Cream (small cup)"
          select
          variant="outlined"
          sx={{ width: 300 }}
          id="cream"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </TextField> */}
      </Box>
    </Box>
  );
}

export default Addition;
