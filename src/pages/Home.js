import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'
import { Section } from '../components/Section'
import { Testimonials } from '../components/Testimonials'
import { Landing } from '../components/Landing'

const Sections = [
{
    Header: "Code.",
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
    Header: "Create.",
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
    Header: "Collaborate.",
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}
]

export const Home = ({}) => {
    return (
        <Container maxW={'7xl'}>
            <Landing />
            {Sections.map((section,index) => (<Section key={index} float={index%2===0?"right":"left"} header={section.Header} content={section.Content} picUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpethelpful.com%2Fdogs%2FWhy-Pitbull-Dog-is-Banned-In-25-Countries&psig=AOvVaw0f3UuQSU1bY_W4gXsxY6QE&ust=1700285330291000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMC62sqmyoIDFQAAAAAdAAAAABAJ"/>))}
            <Testimonials />
        </Container>
    )
}