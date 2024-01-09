import Link from "next/link";

interface MobileNavItemProps {
  name: string;
  path: string;
  onClick: () => void;
}
export const MobileNavItem = ({
  name,
  path,
  onClick
}: MobileNavItemProps) => {
  return (
    <Link
      onClick={onClick}
      style={{
        fontSize: 18,
        fontWeight: 600,
        color: "white",
        textAlign: "center",
      }}
      href={path}
    >
      {name}
    </Link>
  );
};
