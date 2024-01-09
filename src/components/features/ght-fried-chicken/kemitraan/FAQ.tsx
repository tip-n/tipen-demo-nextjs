'use client'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Stack
} from "@mui/material"

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { ResponsiveStack } from "@shared/ght-fried-chicken/stack/responsive";

import { faq } from "@static/ght-fried-chicken/faq";

import { useIsMobileView } from "@hooks/device";

export const FAQ = () => {
    const isMobile = useIsMobileView()
    return (
        <ResponsiveStack py={10} spacing={2}>
            <Box fontSize={isMobile ? 24 : 48} textAlign={"center"}>
                FAQ
            </Box>
            <Stack spacing={1}>
                {faq.map(({
                    question,
                    answer
                }) => (
                    <Accordion
                        key={question}
                        style={{
                            borderRadius: "10px",
                        }}
                        sx={{
                            "&:before": {
                                display: "none"
                            }
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Box fontSize={isMobile ? 14 : 18}>{question}</Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box>
                                {answer}
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Stack>
        </ResponsiveStack>
    )
}