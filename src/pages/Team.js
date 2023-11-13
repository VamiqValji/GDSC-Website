import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export const Team = ({}) => {
    const members = [
        { name: "", linkedIn: "", pfp: "", position: ""},
    ];

    return (
        <>
            <Box>
                <Text fontSize={"xxx-large"} fontWeight={"bold"}>Core Team</Text>
                <Text>
                    Our core team is composed of exceptional talents from Queen's University, 
                    representing a diverse range of faculties and academic years. Explore below 
                    to meet our team!
                </Text>
                {/* IMPLEMENT CARDS HERE */}
            </Box>
        </>
    )
}