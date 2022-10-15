import './App.css';
import Navbar from './components/Navbar/Navbar';
import React from 'react';
import Hero from './components/HeroSection/Hero';
import Technology from './components/Technology_Section/Technology';
import Program_Section from './components/Progam_Section/Program_Section';
import Wisdom from './components/Wisdom_section/Wisdom';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Technology />
      <Program_Section />
      <Wisdom />
    </>
  );
}

export default App;
