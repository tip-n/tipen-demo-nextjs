"use client";
import { useState } from "react";

import { HamburgerButton } from "@ui/button/HamburgerButton";
import { AnimateWrapper } from "@ui/animation/AnimateWrapper";
import { HStack } from "@ui/stack/HStack";
import { Box } from "@ui/box";

import { NavbarItemContainer } from "@shared/navbar/mobile/NavbarItemContainer";
import { ThemeButton } from "@shared/actions/theme/Button";
import { LanguageButton } from "@shared/actions/language/Button";
import { SettingButton } from "@shared/actions/setting/Button";

import { combineClass } from "@lib/class";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerOpen = () => setIsOpen(true);
  const hamburgerClose = () => setIsOpen(false);
  const hamburgerOnClick = (isOpen: boolean) =>
    isOpen ? hamburgerClose : hamburgerOpen;

  return (
    <>
      <HStack className={combineClass("w-full", "py-2", "px-4")}>
        <Box className={"mr-auto"}>
          <HamburgerButton isOpen={isOpen} onClick={hamburgerOnClick(isOpen)} />
        </Box>
        <HStack className={combineClass("ml-auto", "my-auto", "space-x-3")}>
          <SettingButton />
          <ThemeButton />
          <LanguageButton />
        </HStack>
      </HStack>
      {isOpen && (
        <AnimateWrapper>
          <NavbarItemContainer onClose={hamburgerClose} />
        </AnimateWrapper>
      )}
    </>
  );
};
