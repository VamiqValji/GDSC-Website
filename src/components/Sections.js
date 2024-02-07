import { 
    Box, 
    Text,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Stack,
    HStack,
    VStack,
    GridItem,
    chakra,
    Grid,
    Button,
    Flex,
    Image,
} from '@chakra-ui/react'
import React from 'react'
import sectionPicCode from '../assets/sectionPicCode.png'
import sectionPicCreate from '../assets/sectionPicCreate.jpg'
import sectionPicCollab from '../assets/sectionPicCollab.png'
import colors from '../GoogleColors.json'


const sections = [
    {
        Header: "Code.",
        Content: "Meet students interested in developer technologies at your university. All are welcome, including those with diverse backgrounds and different majors.",
        PicURL: sectionPicCode,
        side: "left"
    },
    {
        Header: "Create.",
        Content: "Learn about a range of technical topics and gain new skills through hands-on workshops, events, talks, and project-building activities - both online and in-person.",
        PicURL: sectionPicCreate,
        side: "right"
    },
    {
        Header: "Collaborate.",
        Content: "Apply new learnings to build great solutions for local problems. Advance your skills, career, and network. Give back to your community by helping others learn, too.",
        PicURL: sectionPicCollab,
        side: "left"
    }
]

export const Sections = () => {

    const left = (section) => {
        return (
            <GridItem colSpan={1}>
                <Flex flexDir={"column"} spacing="20px" height="100%" textAlign={{
                        base: 'left',
                        sm: 'center',
                        md: 'left',
                    }} 
                >
                    <Box my={"auto"}>
                        <Heading fontSize="5xl" fontWeight="700">
                        {section.Header}
                        </Heading>
                        <chakra.p width={"60%"} mt={4} mx={{ base: "inherit", sm: "auto", md: "inherit" }}>
                        {section.Content}
                        </chakra.p>
                    </Box>
                </Flex>
            </GridItem>
        )
    }

    const right = (section) => {
        return (
            <GridItem>
                <Flex justifyContent={"center"} my={"auto"}>
                    <Image src={section.PicURL} w="70%" boxShadow={`8px 8px 10px rgba(0,0,0,0.5)`} borderRadius={"8"} my={3}/>
                </Flex>
            </GridItem>
        )
    }
        
    
    return (
        <Box my={8}>
            {sections.map(section => (
                <Box bg={section.side === "left" ? colors.grey100 : 'white'}>
                    <Box as={Container} maxW="7xl" p={4} py={10}>
                        <Grid
                            templateColumns={{
                                base: 'repeat(1, 1fr)',
                                sm: 'repeat(1, 1fr)',
                                md: 'repeat(2, 1fr)',
                            }}
                            gap={4}
                        >
                            {section.side === "left" ? left(section) : right(section)}
                            {section.side === "left" ? right(section) : left(section)}
                        </Grid>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}
