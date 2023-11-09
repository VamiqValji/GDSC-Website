import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { NavBar } from './components/NavBar';
import { Landing } from './components/Landing';
import { Section1 } from './components/Section1';
import { Testimonials } from './components/Testimonials';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box> 
        <NavBar />
        <Landing />
        <Section1 />
        <Section2 />
        <Section3 />
        <Testimonials />
        <Footer/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
