import { bangers } from "@app/ght-fried-chicken/fonts"
import { Box, Stack } from "@mui/material"
import Image from "next/image"

export const Header = () => {
    return (
        <Stack>
            <Box
                position={"relative"}
                mx={"auto"}
                width={"100%"}
                height={"100dvh"}
            >
                <Image
                    src={"/ght-fried-chicken/crispy-fried-chicken-plate-with-salad-carrot.jpg"}
                    style={{
                        objectFit: "cover"
                    }}
                    alt={""}
                    fill
                />
                <Stack
                    spacing={-1}
                    position={"absolute"}
                    fontSize={72}
                    top={"55%"}
                    left={"50%"}
                    sx={{
                        transform: "translate(-50%, -50%);"
                    }}
                    textAlign={"center"}
                    className={bangers.className}
                >
                    <Box>Gak Habis Thinking</Box>
                    <Box>Enaknya !!</Box>
                </Stack>
                <Box
                    bottom={"0%"}
                    textAlign={"center"}
                    position={"absolute"}
                    left={"50%"}
                    fontSize={14}
                    sx={{
                        transform: "translate(-50%, -50%);"
                    }}
                >
                    <a href="https://www.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_6632395.htm#query=ayam%20geprek&position=0&from_view=keyword&track=ais&uuid=3d9c6c32-6e59-4360-ae25-b0de11155357">Image by jcomp</a> on Freepik
                </Box>
            </Box>
        </Stack>
    )
}