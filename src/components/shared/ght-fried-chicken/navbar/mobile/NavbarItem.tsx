"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { combineClass } from "@lib/class";

import { useColor } from "@state/theme";

interface MobileNavItemProps {
  name: string;
  path: string;
  onClick: () => void;
  isHidden?: boolean;
}
export const MobileNavItem = ({
  name,
  path,
  onClick,
  isHidden = false,
}: MobileNavItemProps) => {
  const { navbarText, navbarTextSelected, navbarTextHover } = useColor();
  const currentPath = usePathname();
  const isCurrentPath = currentPath === path;
  const textColor = isCurrentPath ? navbarTextSelected : navbarText;

  if (isHidden) {
    return null;
  }
  return (
    <Link
      href={path}
      onClick={onClick}
      className={combineClass(
        "text-xl",
        "px-5",
        textColor,
        navbarTextHover,
        "hover:text-white py-2",
      )}
    >
      {name}
    </Link>
  );
};
