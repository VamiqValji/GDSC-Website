import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import TestimonialCarousel from './TestimonialCarousel'

export const Testimonials = () => {
    return (
        <Flex flexDir="column" justifyContent={"center"} textAlign={"center"}>
            <Text>See what others have to say</Text>
            <Text fontSize={{ base: '4xl', sm: '5xl', lg: '6xl' }} fontWeight={"bold"}>Testimonials</Text>
            <Flex>
                <TestimonialCarousel />
            </Flex>
        </Flex>
    )
}