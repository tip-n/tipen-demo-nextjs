import { Box, Stack, Typography } from "@mui/material";
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';

import { DesktopNavItem } from "@shared/ght-fried-chicken/navbar/desktop/NavbarItem";

import { menuRoutes } from "@static/ght-fried-chicken/route";
import { bangers } from "@app/ght-fried-chicken/fonts";
import Link from "next/link";

export const DesktopNav = () => {
  return (
    <>
      <Stack spacing={1} p={2} m={"auto"}>
        <Box m={"auto !important"}>
          <Link href={"/ght-fried-chicken"}>
            <Stack direction={"row"} spacing={1} style={{
              pointerEvents: "none",
              userSelect: "none",
            }}>
              <LocalFireDepartmentRoundedIcon sx={{
                my: "auto",
                fontSize: "48px"
              }}/>
              <Stack justifyContent={"center"} width={"100%"} spacing={0}>
                <Box fontSize={24} fontWeight={500} className={bangers.className}>
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
        <Stack
          direction={"row"}
          spacing={4}
          justifyContent={"center"}
          textAlign={"center"}
        >
          {menuRoutes.map(({ name, path }) => (
            <DesktopNavItem
              key={path}
              name={name}
              path={path}
            />
          ))}
        </Stack>
      </Stack>
    </>
  );
};
