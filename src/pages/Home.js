import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'
import { Section } from '../components/Section'
import { Testimonials } from '../components/Testimonials'
import { Landing } from '../components/Landing'
import sectionPicCode from '../assets/sectionPicCode.png'
import sectionPicCreate from '../assets/sectionPicCreate.png'
import sectionPicCollab from '../assets/sectionPicCollab.png'


const Sections = [
{
    Header: "Code.",
    Content: "Meet students interested in developer technologies at your university. All are welcome, including those with diverse backgrounds and different majors.",
    PicURL: sectionPicCode
},
{
    Header: "Create.",
    Content: "Learn about a range of technical topics and gain new skills through hands-on workshops, events, talks, and project-building activities - both online and in-person.",
    PicURL: sectionPicCreate
},
{
    Header: "Collaborate.",
    Content: "Apply new learnings to build great solutions for local problems. Advance your skills, career, and network. Give back to your community by helping others learn, too.",
    PicURL: sectionPicCollab
}
]

export const Home = ({}) => {
    return (
        <Container maxW={'7xl'}>
            <Landing />
            {Sections.map((section,index) => (<Section key={index} float={index%2===0?"right":"left"} header={section.Header} content={section.Content} picUrl={section.PicURL}/>))}
            <Testimonials />
        </Container>
    )
}