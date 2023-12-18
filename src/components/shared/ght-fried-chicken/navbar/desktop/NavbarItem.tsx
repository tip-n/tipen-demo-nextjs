"use client";
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
      href={path}
    >
      {name}
    </Link>
  );
};
