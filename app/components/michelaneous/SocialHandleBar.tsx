import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import { FaSpotify } from "react-icons/fa";
import { Box } from "@mui/material";
import Link from "next/link";

const iconSize = 25;

const socialMediaIcons = [
  {
    id: 1,
    social: "spotify",
    icon: <FaSpotify style={{ fontSize: iconSize, color: "white" }} />,
    link: "https://open.spotify.com/user/starbucks",
  },
  {
    id: 2,
    social: "facebook",
    icon: <FacebookIcon sx={{ fontSize: iconSize, color: "white" }} />,
    link: "https://www.facebook.com/Starbucks/",
  },
  {
    id: 3,
    social: "pinterest",
    icon: <PinterestIcon sx={{ fontSize: iconSize, color: "white" }} />,
    link: "https://kr.pinterest.com/starbucks/",
  },
  {
    id: 4,
    social: "instagram",
    icon: <InstagramIcon sx={{ fontSize: iconSize, color: "white" }} />,
    link: "https://www.instagram.com/starbucks/",
  },
  {
    id: 5,
    social: "youtube",
    icon: <YouTubeIcon sx={{ fontSize: iconSize, color: "white" }} />,
    link: "https://www.youtube.com/starbucks",
  },
  {
    id: 6,
    social: "x",
    icon: <XIcon sx={{ fontSize: 32, color: "white" }} />,
    link: "https://x.com/starbucks/",
  },
];

function SocialHandleBar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        paddingY: 3,
      }}
    >
      {socialMediaIcons.map((icon) => (
        <Box
          sx={{
            ":hover": { backgroundColor: "#edebe9" },
            animationDuration: 10,
            backgroundColor: "white",
            borderRadius: "100%",
            width: 50,
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          key={icon.id}
        >
          <Box
            sx={{
              backgroundColor: "#202020",
              borderRadius: "100%",
              width: 36,
              height: 36,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href={icon.link}>{icon.icon}</Link>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default SocialHandleBar;
