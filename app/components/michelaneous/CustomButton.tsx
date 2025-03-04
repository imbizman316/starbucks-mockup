import { Options } from "@/app/types/store_locator/types";
import { Button, Typography } from "@mui/material";
import React from "react";

const CustomButton = ({
  option,
  setOption,
  children,
}: {
  children: string;
  option: Options;
  setOption: React.Dispatch<React.SetStateAction<Options>>;
}) => {
  return (
    <Button
      className="buttonPadding"
      sx={{
        color: option.option === children ? "#ffffed" : "#1f654b",
        fontSize: "16px",
        borderColor: "#ffffed",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: "50px",
        fontWeight: 600,
        backgroundColor: option.option === children ? "#1f654b" : "#ffffff",
        paddingX: 3,
        width: "200px",
      }}
      onClick={() => setOption({ option: children })}
    >
      <Typography>{children}</Typography>
    </Button>
  );
};

export default CustomButton;
