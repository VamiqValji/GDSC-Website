import React from 'react'
import { GDSCLogoView } from './GDSCLogoView';
import { Grid, GridItem, Box, Flex, Text } from '@chakra-ui/react';
import colors from "../GoogleColors.json";

export const Landing = ({}) => {
    return (
        <Grid templateColumns={{
                base: "repeat(1, 1fr)", // stacks items vertically on smallest screens
                lg: "repeat(2, 1fr)", // two columns for small screens
            }}
            templateRows='repeat(2, 1fr)' 
            gap={4}
        >
            <GridItem rowSpan={2} colSpan={1}>
                <Flex flexDir={"column"} height="100%" justifyContent={"center"} textAlign={{base: "center", lg: "left"}} >
                    <Text color={colors.red500} fontSize={{ base: '4xl', sm: '5xl', lg: '6xl' }} fontWeight={"bold"}>CODE.</Text>
                    <Text color={colors.green500} fontSize={{ base: '4xl', sm: '5xl', lg: '6xl' }} fontWeight={"bold"}>CREATE.</Text>
                    <Text color={colors.blue500} fontSize={{ base: '4xl', sm: '5xl', lg: '6xl' }} fontWeight={"bold"}>COLLABORATE.</Text>
                    <Flex flexDir={"column"} mt={4} mx={{xl: "0", lg: "0", md: "32", sm: "16"}}>
                        <Text>Google Developer Student Clubs are community groups for college and university students interested in Google developer technologies.</Text>
                        <Text color={'gray.500'} mt={3}>Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.</Text>
                    </Flex>
                </Flex>
            </GridItem>
            {/* // 3D logo viewport */}
            <GridItem rowSpan={2} colSpan={1}> <Flex justifyContent={"center"}> <GDSCLogoView/></Flex></GridItem>
        </Grid>
    )
}