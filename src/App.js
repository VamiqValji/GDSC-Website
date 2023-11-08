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

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box> 
        <NavBar />
        <Landing />
      </Box>
    </ChakraProvider>
  );
}

export default App;
