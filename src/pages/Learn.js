import { Divider, Box, Container, SimpleGrid, Text, Stack, Heading, UnorderedList, ListItem, AbsoluteCenter } from '@chakra-ui/react'
import React from 'react'
import colors from "../GoogleColors.json";
import { LearningReasource } from '../components/LearningReasource'

export const Learn = () => {

    const resources = [
        {title:'Intro to Web Development', desc:'If you are a beginner or Interested to start your career in Web Development. Here is the opportunity to kick start your career.', link:'https://www.youtube.com/watch?v=p47WIdzvAug&t=4s&ab_channel=WebDevCommunity', image:'https://i3.ytimg.com/vi/p47WIdzvAug/maxresdefault.jpg', color:colors.blue500},
        {title:'Google AI', desc:'Explore how Google is applying artificial intelligence (AI) and find open-source tools and experiences for you own AI projects', link:'https://ai.google/build', image:'https://ai.google/static/images/share.png', color: colors.yellow600},
        {title:'Flutter Codelabs', desc:'Google Developers Codelabs provide a guided, tutorial, hands-on coding experience.', link:'https://codelabs.developers.google.com/?cat=Flutter&text=flutter', image:'https://docs.flutter.dev/assets/images/flutter-logo-sharing.png', color: colors.blue500},
        {title:'Intro to Angular', desc:'Ready to learn Angular? This beginner friendly course takes you from setup to building your first Angular App', link:'https://www.youtube.com/playlist?list=PL1w1q3fL4pmj9k1FrJ3Pe91EPub2_h4jF', image:'https://i3.ytimg.com/vi/xAT0lHYhHMY/maxresdefault.jpg', color: colors.red500},
        {title:'Data Structures and Algorithms', desc:'Familiarize yourself with commmon data structures and algorithms.', link:'https://techdevguide.withgoogle.com/paths/data-structures-and-algorithms/', image: 'https://etienneyamsi.com/img/what-is-an-algorithm.png', color: colors.yellow600},
        {title:'Interview Prep', desc:'Familiarize yourself with the ins and outs of software engineering interviews. These resources will help students and professionals prepare and practice.', link:'https://techdevguide.withgoogle.com/paths/interview/', image:'https://miro.medium.com/v2/resize:fit:1400/1*fNnHCl0wXbBrrGx3XvruIQ.jpeg', color: colors.red500},
        {title:'Firebase Summit 2022', desc:'Catch up on the latest product announcements in our keynote and learn how Firebase can help you make your app the best it can.', link:'https://www.youtube.com/playlist?list=PLl-K7zZEsYLlSZJCc2Wu0zp06M-J-gC5_', image:'https://firebase.google.com/static/images/events/firebase-summit-2022.png', color:colors.blue500},
        
    ]

    const offerings = [
        {title:'Beginner Guides', desc: ' Jumpstart your journey into coding, app development, machine learning, and more.'},
        {title:'Project Resources', desc: ' Find tools, libraries, and tutorials to aid your creative and innovative projects.'},
        {title:'Advanced Topics', desc: ' Deepen your understanding with resources on emerging technologies and complex concepts.'},
        {title:'Workshops and Webinars', desc: ' Stay updated on our upcoming events and access recordings of past sessions.'},
        {title:'Community Contributions', desc: ' Learn from the projects and experiences shared by fellow club members.'},
    ] 

    return (
        <Container maxW={'7xl'}>
                <Stack
                    spacing={{ base: 4, md: 5 }}
                    p={{ base: 10, md: 18 }}
                    >
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                        <Text as={'span'} position={'relative'}>
                            Learning Resources
                        </Text>
                        <br />
                    </Heading>

                    <Text color={'gray.500'} as='i'>
                        Where Aspiring Minds Meet Cutting-Edge Technology
                    </Text>
                    <Text color={'gray.500'}>
                    Greetings, Innovators and Tech Enthusiasts! You've arrived at the central repository of our club's knowledge and learning materials. 
                    Whether you're a beginner eager to dive into the world of technology, or an experienced developer seeking advanced materials, 
                    this is your one-stop destination.
                    </Text>

                    <Heading size={'lg'}>Explore, Learn, and Grow:</Heading>
                    <UnorderedList>
                        {offerings.map((offering) => <ListItem><Text color={'gray.500'}><Text as={'b'} >{offering.title}:</Text>{offering.desc}</Text></ListItem>)}
                    </UnorderedList>

                    <Text color={'gray.500'}>
                        Remember, learning is a journey, not a destination. Embrace curiosity, collaborate with peers, 
                        and let's innovate together. Happy exploring!
                    </Text>
                    <Text as={'i'} color={'gray.500'}>
                        Queen's GDSC Team
                    </Text>
                </Stack>
            <Box position='relative' padding='5'>
                <Divider />
                <AbsoluteCenter bg='white' px='4'>
                    Resources
                </AbsoluteCenter>
            </Box>
            <SimpleGrid style={{paddingTop:"1em"}} columns={{sm:2, md:3, lg:4, xl: 4}} spacing={4}>
                {resources.map((resource) => <LearningReasource info={
                        {title:resource.title, 
                        desc:resource.desc, 
                        link:resource.link, 
                        image:resource.image, 
                        color:resource.color
                        }} />
                    )
                }
            </SimpleGrid>
            <Box mb={12}></Box>
        </Container>
    )
}