import React from 'react'
import { Link } from 'react-router-dom'
import colors from "../GoogleColors.json"

// export const NavBar = ({}) => {
//     return (
//       <nav>
//         <Flex minWidth='max-content' alignItems='center' gap='20'>
//             <Link to="/">Home</Link>
//             <Link to="/team">Team</Link>
//             <Link to="/events">Events</Link>
//             <Link to="/learn">Learn</Link>
//             <Link to="/contact">Contact Us</Link>
//         </Flex>
//       </nav>
//     )
// }

import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons'
import { GDSCLogo } from './GDSCLogo'

const NAV_ITEMS = [
  { label: 'Home', href: '' },
  { label: 'Team', href: 'team' },
  { label: 'Events', href: 'events' },
  { label: 'Learn', href: 'learn' },
  // { label: 'Contact', href: 'contact' },
]

export const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        bg={colors.grey100}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 6 }}
        px={{ base: 10 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Box m={2} mt={1} ><GDSCLogo size={.2} /></Box>
            <Flex direction={"column"}>
                <Text
                    color={colors.grey700}
                    fontSize={20}
                    fontWeight={500}>
                    Google Developer Student Clubs
                </Text>
                <Text
                  mt={-1}
                  color={colors.grey700}
                  fontSize={14}>
                  Queen's University
                </Text>
            </Flex>
            {/* 
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex> */}
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <DesktopNav />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkDefaultColor = colors.grey700;
  const linkColors = [colors.blue500, colors.red500, colors.green500, colors.yellow600, colors.blue500];

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem, i) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link to={navItem.href}>
                <Box
                  as="a"
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkDefaultColor}
                  transition={.25}
                  _hover={{
                    textDecoration: 'none',
                    color: linkColors[i],
                  }}>
                  {navItem.label}
                </Box>
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}