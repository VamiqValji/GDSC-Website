import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = ({}) => {
    return (
        <Flex minWidth='max-content' alignItems='center' gap='20'>
                        <Link to="/">Home</Link>
                        <Link to="/team">Team</Link>
                        <Link to="/events">Events</Link>
                        <Link to="/learn">Learn</Link>
        </Flex>
    )
}