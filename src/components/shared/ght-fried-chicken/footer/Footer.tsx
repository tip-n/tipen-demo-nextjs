import Link from "next/link"
import { Box, Stack } from "@mui/material"

export const Footer = () => {
    return (
        <Stack
            direction={"row"}
            p={1.5}
            fontSize={12}
            textAlign={"center"}
            justifyContent={"center"}
            spacing={0.5}
        >
            <Box>2023, Created By</Box>
            <Link
                href={process.env.NEXT_PUBLIC_URL || ""}
                target="_blank"
            >
                Steffen Edlin
            </Link>
        </Stack>
    )
}