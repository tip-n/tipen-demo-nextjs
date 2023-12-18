"use client";
import React from "react";

import { AppBar, Box, Container, Toolbar } from "@mui/material";

import { DesktopNav } from "@shared/ght-fried-chicken/navbar/desktop/Navbar";

export const navbarHeight = "60px";

export const Navbar = () => {
  // const isMobile = UseIsMobileView();

  return (
    <>
      {/* <FadeIn> */}
        <AppBar position="fixed" color="error">
          <Toolbar>
            <DesktopNav/>
            {/* {isMobile ? <MobileNav /> : <DesktopNav />} */}
          </Toolbar>
        </AppBar>
      {/* </FadeIn> */}
    </>
  );
};
