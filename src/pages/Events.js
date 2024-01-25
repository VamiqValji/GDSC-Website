import { Container, Heading, Stack, Text, Box } from '@chakra-ui/react'
import React from 'react'
import { Section } from '../components/Section'

export const Events = ({}) => {
    const Head = () => (
        <>
            <Container maxW={'7xl'}>
                <Stack direction='row-reverse' align={'center'}>
                    <Box mx={{base: 8}}>
                        <Stack direction='column' spacing={{ base: 5, md: 10 }}>
                            <Heading
                                lineHeight={1.1}
                                fontWeight={600}
                                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                                my={{base: '2'}}
                            >
                            <Text as={'span'} position={'relative'}>
                                Events
                            </Text>
                            <br />
                            </Heading>
                            <Text color={'gray.500'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Aliquam elementum odio vitae semper vulputate. Mauris condimentum non justo vitae tempor. 
                                Duis eu lorem sem. Sed malesuada suscipit elit a rutrum. Sed porttitor vel ligula et sollicitudin. 
                                Fusce ac nibh euismod felis suscipit tempor. In egestas porta neque et molestie. Quisque malesuada tincidunt ex, 
                                vel tempus enim sagittis quis. Nulla sodales, quam sit amet interdum egestas, ex sapien volutpat purus, 
                                non sollicitudin sem dolor et urna.
                            </Text>
                        </Stack>
                    </Box>
                    <Box
                        position={'relative'}
                        height={'330px'}
                        rounded={'2xl'}
                        boxShadow={'2xl'}
                        width={'full'}
                        overflow={'hidden'}>
                    </Box>
                </Stack>
            </Container>
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