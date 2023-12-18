import { Box, Stack } from "@mui/material"

interface MenuCardProps {
    name: string
    description: string
    isBestSeller: boolean
    price: number
}

export const MenuCard = ({
    name,
    description,
    isBestSeller,
    price
}: MenuCardProps) => {
    return (
        <Stack>
            <Stack direction={"row"}>
                <Box>{name}</Box>
                <Box ml={"auto"}>${price}</Box>
            </Stack>
            <Box fontSize={14}>{description}</Box>
        </Stack>
    )
}