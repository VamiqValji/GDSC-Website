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
import { Section2 } from './components/Section2';
import { Section3 } from './components/Section3';
import { Footer } from './components/Footer';

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
