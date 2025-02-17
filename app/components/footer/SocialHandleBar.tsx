import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import { FaSpotify } from "react-icons/fa";
import { Box } from "@mui/material";
import SocialOneIcon from "./SocialOneIcon";

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
        <SocialOneIcon icon={icon} key={icon.id} />
      ))}
    </Box>
  );
}

export default SocialHandleBar;
