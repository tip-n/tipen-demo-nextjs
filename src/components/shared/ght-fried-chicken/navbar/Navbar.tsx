"use client";
import React from "react";

import { AppBar, Fade, Toolbar } from "@mui/material";

import { DesktopNav } from "@shared/ght-fried-chicken/navbar/desktop/Navbar";
import { MobileNav } from "@shared/ght-fried-chicken/navbar/mobile/Navbar";

import { useIsMobileView } from "@hooks/device";

export const navbarHeight = "60px";

export const Navbar = () => {
  const isMobile = useIsMobileView();

  return (
    <>
      <Fade in>
        <AppBar
          position="fixed"
          color="error"
        >
          <Toolbar>
            {isMobile ? <MobileNav/> : <DesktopNav/>}
          </Toolbar>
        </AppBar>
      </Fade>
    </>
  );
};
