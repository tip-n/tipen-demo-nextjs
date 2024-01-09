"use client";
import { useState } from "react";
import Link from "next/link";

import { Box, IconButton, Stack } from "@mui/material";

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';

import { bangers } from "@app/ght-fried-chicken/fonts";

import { MobileNavModal } from "@shared/ght-fried-chicken/navbar/mobile/NavbarModal";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerOpen = () => setIsOpen(true);
  const hamburgerClose = () => setIsOpen(false);
  const hamburgerOnClick = (isOpen: boolean) =>
    isOpen ? hamburgerClose : hamburgerOpen;

  return (
    <>
      <Stack direction={"row"} spacing={1} py={2} width={"100%"}>
        <Box my={"auto !important"}>
          <Link href={"/ght-fried-chicken"}>
            <Stack direction={"row"} mr={"auto !important"} spacing={0.5} style={{
              pointerEvents: "none",
              userSelect: "none",
            }}>
              <LocalFireDepartmentRoundedIcon sx={{
                my: "auto",
                fontSize: "40px"
              }}/>
              <Stack justifyContent={"center"} width={"100%"} spacing={0}>
                <Box fontSize={18} fontWeight={500} className={bangers.className}>
                  Gak habis thinking
                </Box>
                <Box
                  fontSize={16}
                  textAlign={"start"}
                  fontWeight={600}
                >
                  FRIED CHICKEN
                </Box>
              </Stack>
            </Stack>
          </Link>
        </Box>
        <Box marginLeft={"auto !important"}>
          <IconButton onClick={hamburgerOnClick(isOpen)} disableRipple>
            <MenuRoundedIcon style={{
              color: "white",
              fontSize: "32px"
            }}/>
          </IconButton>
        </Box>
      </Stack>
      <MobileNavModal isOpen={isOpen} onClose={hamburgerClose}/>
    </>
  );
};
