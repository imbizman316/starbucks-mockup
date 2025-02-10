"use client";

import { aboutUsData } from "@/app/data/footer/data";
import { MainMenus, SubMenus } from "@/app/types/footer/types";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SubMenuItem = ({
  items,
  menuOpen,
}: {
  items: SubMenus[];
  menuOpen: boolean;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {items.map((item) => (
        <Typography
          sx={{
            maxHeight: menuOpen ? "50px" : "0px",
            overflow: "hidden",
            transition: "max-height 0.2s ease-in-out",
            // transition: {
            //   "maxHeight: 0.2s ease-in-out,
            // },
            color: "rgba(0,0,0,.58)",
            fontSize: "13px",
            // paddingBottom: "30px",
            // "&:hover": {
            //   color: "#695844",
            //   fontWeight: 550,
            // },
            // transition: "text-shadow 0.1s ease",
            // paddingY: menuOpen && "2px",
            "&:hover": {
              textShadow: "0 0 1px currentColor",
            },
          }}
          key={item.title}
        >
          {item.title}
        </Typography>
      ))}
    </Box>
  );
};

const MainTitle = ({ data }: { data: MainMenus }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box>
      <Box
        display="flex"
        alignItems="start"
        justifyContent="space-between"
        onClick={() => setMenuOpen(!menuOpen)}
        sx={{
          cursor: "pointer",
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 560,
            letterSpacing: 1,
            color: "#695844",
            marginBottom: 3,
          }}
        >
          {data.mainTitle}
        </Typography>
        <KeyboardArrowDownIcon
          sx={{
            transform: `rotate(${menuOpen ? "180deg" : "0deg"})`,
            transition: "transform 0.2s ease-in-out",
          }}
        />
      </Box>
      {/* {menuOpen && <SubMenuItem items={data.subMenus} menuOpen={menuOpen} />} */}

      <SubMenuItem items={data.subMenus} menuOpen={menuOpen} />
    </Box>
  );
};

const DropdownAboutUs = () => {
  return (
    <Box width="100%">
      {aboutUsData.map((data, index) => (
        <MainTitle data={data} key={index} />
      ))}
    </Box>
  );
};

export default DropdownAboutUs;
