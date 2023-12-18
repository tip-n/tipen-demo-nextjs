import { Box, Stack } from "@mui/material"
import { SushiMenu } from "@features/ght-fried-chicken/menu/sushi"

export const MenuContent = () => {
    return (
        <Box p={10} pb={1}>
            <Stack
                borderRadius={"10px"}
                borderColor={"white"}
                p={5}
                border={2}
                // position={"relative"}
                mx={"auto"}
                width={"100%"}
                height={"100dvh"}
            >
                <Box fontSize={48} textAlign={"center"}>Menu</Box>
                <SushiMenu/>
            </Stack>
        </Box>
    )
}