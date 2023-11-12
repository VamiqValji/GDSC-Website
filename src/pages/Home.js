import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Section1 } from '../components/Section1'
import { Section2 } from '../components/Section2'
import { Section3 } from '../components/Section3'
import { Testimonials } from '../components/Testimonials'
import { Landing } from '../components/Landing'

export const Home = ({}) => {
    return (
        <>
            <Text>Home</Text>
            <Landing />
            <Section1 />
            <Section2 />
            <Section3 />
            <Testimonials />
        </>
    )
}