import React from 'react'
import { GDSCLogoView } from './GDSCLogoView';
import { Grid, GridItem, Box } from '@chakra-ui/react';

export const Landing = ({}) => {
    return (
            // 3D logo viewport
            <Grid templateColumns='repeat(2, 1fr)' templateRows='repeat(2, 1fr)' gap={4}>
                <GridItem rowSpan={2} colSpan={1}> ** Put Landing Text Here ** </GridItem>
                <GridItem rowSpan={2} colSpan={1}> <Box> <GDSCLogoView/></Box></GridItem>
            </Grid>
            
            
    )
}