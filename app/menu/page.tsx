import { Box, Typography } from "@mui/material";
import React from "react";
import StickyTitle from "../components/navigation/StickyTitle";
import Link from "next/link";

interface MenuOption {
  id: number;
  title: string;
  link: string;
}

function MenuNav() {
  const menu_options = [
    { id: 1, title: "Menu", link: "/menu" },
    { id: 2, title: "Featured", link: "/menu/featured" },
    { id: 3, title: "Previous", link: "/menu/previous" },
    { id: 4, title: "Favorites", link: "/favorites" },
  ];

  const MenuItem = ({ props }: { props: MenuOption }) => {
    return (
      <Link href={props.link}>
        <Typography
          sx={{
            color: "#586a82",
            fontSize: "13px",
            fontWeight: 400,
            textUnderlinePosition: 1,
            textUnderlineOffset: 1,
          }}
        >
          {props.title}
        </Typography>
      </Link>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
      }}
    >
      {menu_options.map((option) => (
        <MenuItem key={option.id} props={option} />
      ))}
    </Box>
  );
}

function MenuPage() {
  return (
    <Box>
      <StickyTitle color="#f9f9f9">
        <MenuNav />
      </StickyTitle>
    </Box>
  );
}

export default MenuPage;
