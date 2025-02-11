import { Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuOption {
  id: number;
  title: string;
  link: string;
}

export const MenuItem = ({
  menu,
  children,
}: {
  menu: MenuOption;
  children: string;
}) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const pathnamePart = pathSegments[1]?.toString() || "menu";

  const underline =
    menu?.title?.toLowerCase() === pathnamePart ? "underline" : null;

  return (
    <Link href={menu?.link || "/"}>
      <Typography
        sx={{
          color: "#586a82",
          fontSize: "13px",
          fontWeight: 400,
          textUnderlineOffset: 8,
          textDecoration: underline,
        }}
      >
        {children}
      </Typography>
    </Link>
  );
};
