import { Container } from '@chakra-ui/react'
import React from 'react'
// import { Section } from '../components/Section'
import { Sections } from '../components/Sections'
import { Testimonials } from '../components/Testimonials'
import { Landing } from '../components/Landing'

export const Home = () => {
    return (
        <>
            <Container maxW={'7xl'}>
                <Landing />
            </Container>
            
            {/* vu's {Sections.map((section,index) => (<Section key={index} float={index%2===0?"right":"left"} header={section.Header} content={section.Content} picUrl={section.PicURL}/>))} */}
            <Sections />
            <Container maxW={'7xl'}>
                <Testimonials />
            </Container>
        </>
    )
}