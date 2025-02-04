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
        <Typography>{props.title}</Typography>
      </Link>
    );
  };

  return (
    <Box>
      {menu_options.map((option) => (
        <MenuItem key={option.id} props={option} />
      ))}
    </Box>
  );
}

function MenuPage() {
  return (
    <Box>
      <StickyTitle>
        <MenuNav />
      </StickyTitle>
    </Box>
  );
}

export default MenuPage;
