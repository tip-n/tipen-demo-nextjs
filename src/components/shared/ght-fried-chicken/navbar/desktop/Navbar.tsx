import { Box, Stack, Typography } from "@mui/material";
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';

import { DesktopNavItem } from "@shared/ght-fried-chicken/navbar/desktop/NavbarItem";

import { menuRoutes } from "@static/route";
import { bangers } from "@app/ght-fried-chicken/fonts";

export const DesktopNav = () => {
  return (
    <>
      <Stack spacing={1} p={2} m={"auto"}>
        <Stack direction={"row"} my={"auto"} spacing={1}>
          <LocalFireDepartmentRoundedIcon sx={{
            my: "auto",
            fontSize: "48px"
          }}/>
        <Stack justifyContent={"center"} mx={"auto"} width={"100%"} spacing={0}>
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
        <Stack
          direction={"row"}
          spacing={2}
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
