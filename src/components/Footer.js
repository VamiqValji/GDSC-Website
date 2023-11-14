import {
  Box,
  chakra,
  Container,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaEnvelope, FaHome, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import React from 'react'
import { GDSCLogo } from './GDSCLogo'
import GoogleColors from "../GoogleColors.json"
import GDSCWhite from "../assets/GDSCWhite.png";
import { Link } from 'react-router-dom'

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export const Footer = ({}) => {
  return (
    <Box
      bg={GoogleColors.blue500}
      color={GoogleColors.grey100}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Link to="/">
            <Image src={GDSCWhite} 
                boxSize='100px'
                objectFit='contain'
                alt='GDSC Logo White' 
            />
        </Link>
        <Text>© GDSC Queen's. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/gdscqueens/'}><FaInstagram /></SocialButton>
          <SocialButton label={"LinkedIn"} href={'https://www.linkedin.com/company/gdsc-queen-s'}><FaLinkedinIn /></SocialButton>
          <SocialButton label={"Email"} href={'mailto:20ama12@queensu.ca'}><FaEnvelope /></SocialButton>
          <SocialButton label={"Home"} href={'https://gdsc.community.dev/queens-university-kingston/'}><FaHome /></SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}