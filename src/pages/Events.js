import { Container, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Section } from '../components/Section'

export const Events = ({}) => {
    const Head = () => (
        <>
            <Stack direction='column'>
                <Heading                    
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                            <Text>Events</Text>
                    </Heading>
                    <br />
                    <Text color={'gray.500'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aliquam elementum odio vitae semper vulputate. Mauris condimentum non justo vitae tempor. 
                        Duis eu lorem sem. Sed malesuada suscipit elit a rutrum. Sed porttitor vel ligula et sollicitudin. 
                        Fusce ac nibh euismod felis suscipit tempor. In egestas porta neque et molestie. Quisque malesuada tincidunt ex, 
                        vel tempus enim sagittis quis. Nulla sodales, quam sit amet interdum egestas, ex sapien volutpat purus, 
                        non sollicitudin sem dolor et urna.
                    </Text>
            </Stack>
        </>
    )

    return (
        <>
            <Container maxW={'7xl'}>
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: 'column', md: 'row' }}>
                {Head()}
            </Stack>
            </Container>
        </>
    )
}