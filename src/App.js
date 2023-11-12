import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import {
  Route,
  Routes
} from "react-router-dom";
import { Learn } from './pages/Learn';
import { Events } from './pages/Events';
import { Team } from './pages/Team';
import { Home } from './pages/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box> 
        <NavBar />
      </Box>

      {/* React Router Switches */}
      <Routes>
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
