import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "next/link";
import React from "react";

const privacyOptions = [
  { id: 1, title: "Privacy Notice", link: "/" },
  { id: 2, title: "Consumer Health Privacy Notice", link: "/" },
  { id: 3, title: "Terms of Use", link: "/" },
  { id: 4, title: "Do Not Share My Personal Information", link: "/" },
  { id: 5, title: "CA Supply Chain Act", link: "/" },
  { id: 6, title: "Accessibility", link: "/" },
  { id: 7, title: "Cookie Preferences", link: "/" },
];

function PrivacyTerms() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "21px",
      }}
    >
      {privacyOptions.map((option) => (
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            color: "#767676",
            ":hover": {
              textDecoration: "underline",
            },
          }}
          key={option.id}
        >
          <Link href={option.link}>{option.title}</Link>
        </Typography>
      ))}
    </Box>
  );
}

export default PrivacyTerms;
