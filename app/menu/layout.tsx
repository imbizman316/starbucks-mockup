"use client";

import Link from "next/link";
import StickyTitle from "../components/navigation/StickyTitle";
import { Box, Typography } from "@mui/material";
import React from "react";
import { usePathname } from "next/navigation";

interface MenuOption {
  id: number;
  title: string;
  link: string;
}

function MenuNav() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const pathnamePart = pathSegments[1]?.toString() || "menu";
  console.log(pathnamePart);

  const menu_options = [
    { id: 1, title: "Menu", link: "/menu" },
    { id: 2, title: "Featured", link: "/menu/featured" },
    { id: 3, title: "Previous", link: "/menu/previous" },
    { id: 4, title: "Favorites", link: "/menu/favorites" },
  ];

  const MenuItem = ({ props }: { props: MenuOption }) => {
    const underline =
      props.title.toLowerCase() === pathnamePart ? "underline" : null;

    return (
      <Link href={props.link}>
        <Typography
          sx={{
            color: "#586a82",
            fontSize: "13px",
            fontWeight: 400,
            textUnderlineOffset: 8,
            textDecoration: underline,
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

interface MenuLayoutProps {
  children: React.ReactNode;
}

export default function MenuLayout({ children }: MenuLayoutProps) {
  return (
    <>
      <StickyTitle color="#f9f9f9">
        <MenuNav />
      </StickyTitle>
      {children}
    </>
  );
}
