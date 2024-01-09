import { Box, Modal, Stack } from "@mui/material";

import { MobileNavItem } from "@shared/ght-fried-chicken/navbar/mobile/NavbarItem";

import { menuRoutes } from "@static/ght-fried-chicken/route";

interface MobileNavModal {
  isOpen: boolean
  onClose: () => void
}

export const MobileNavModal = ({isOpen, onClose}: MobileNavModal) => {

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box m={"auto"} sx={{
        top: "50%",
        left: "50%",
        position: "absolute",
        transform: "translate(-50%, -50%)",
      }}>
        <Stack spacing={1}>
          {menuRoutes.map(({ name, path }) => (
              <MobileNavItem
                key={path}
                name={name}
                path={path}
                onClick={onClose}
              />
            ))}
        </Stack>
      </Box>
    </Modal>
  );
};
