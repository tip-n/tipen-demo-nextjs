"use client";
import { Box } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DesktopNavItemProps {
  name: string;
  path: string;
}

export const DesktopNavItem = ({
  name,
  path,
}: DesktopNavItemProps) => {
  const currentPath = usePathname();
  const isCurrentPath = currentPath === path;
  // const textColor = isCurrentPath ? navbarTextSelected : navbarText;

  return (
    <Link
      style={{
        fontSize: 18,
        fontWeight: 600,
      }}
      href={path}
    >
      <Box
        color={
          isCurrentPath ?
          "navbarSelected.contrastText" :
          "navbarUnselected.contrastText"
        }
        sx={{
          '&:hover': {
            color: "white"
          }
        }}
      >
        {name}
      </Box>
    </Link>
  );
};
