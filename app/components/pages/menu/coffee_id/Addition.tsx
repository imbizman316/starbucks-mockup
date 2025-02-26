import HRDivider from "@/app/components/michelaneous/HRDivider";
// import { Toppings } from "@/app/types/menus/types";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React from "react";

function Addition({ toppings, setToppings }) {
  function handleChange(e: SelectChangeEvent) {
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
        <FormControl>
          <InputLabel variant="filled">Milk (small cup)</InputLabel>
          <Select
            variant="outlined"
            sx={{ width: 300 }}
            name="milk"
            onChange={handleChange}
            value={String(toppings.milk)}
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel variant="filled">Sugar (tea spoon)</InputLabel>
          <Select
            variant="outlined"
            sx={{ width: 300 }}
            name="sugar"
            onChange={handleChange}
            value={String(toppings.sugar)}
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel
            variant="filled"
            sx={{
              height: 60,
            }}
          >
            Cream (small cup)
          </InputLabel>
          <Select
            variant="outlined"
            sx={{ width: 300 }}
            name="cream"
            onChange={handleChange}
            value={String(toppings.cream)}
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}

export default Addition;
