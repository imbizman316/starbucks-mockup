import React from "react";
import NewCustomButton from "../michelaneous/NewCustomButton";
import { Box } from "@mui/material";

function CreateAccountLoginBar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        },
        gap: 1,
      }}
    >
      <NewCustomButton
        link="/account/login"
        color="#FFFFFF"
        fontcolor="#000000b3"
        text="sign in"
      />
      <NewCustomButton
        link="/account/create"
        color="#000000b3"
        fontcolor="#ffffff"
        text="join now"
      />
    </Box>
  );
}

export default CreateAccountLoginBar;
