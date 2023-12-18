"use client";
import { VStack } from "@ui/stack/VStack";
import { MobileNavItem } from "@shared/navbar/mobile/NavbarItem";
import { Modal } from "@ui/modal/Modal";

import { useNavRoute } from "@hooks/route";

interface NavbarItemContainerProps {
  onClose: () => void;
}

export const NavbarItemContainer = ({ onClose }: NavbarItemContainerProps) => {
  const routes = useNavRoute();

  return (
    <>
      <Modal close={onClose}>
        <VStack>
          {routes.map(({ name, path, isHidden }) => (
            <MobileNavItem
              key={path}
              onClick={onClose}
              name={name}
              path={path}
              isHidden={isHidden}
            />
          ))}
        </VStack>
      </Modal>
    </>
  );
};
