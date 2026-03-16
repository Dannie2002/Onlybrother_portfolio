import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import MyProject from './Components/my_Project';
import ContactMe from './Components/ContactMe';
import GitConnect from './Components/GitConnect'; 
import Connect from './SECTIONS/Connect';
import Expertise from './SECTIONS/Expertise';
import Subnetworking from './SECTIONS/SUBSECTIONS/Subnetworking';



function App() {
  return (
    <main>
       <Header /> 

      <Hero />
      <About /> 
      <MyProject />
      <Expertise />
      <ContactMe />
      <Connect />
      <Subnetworking />
      
    
    </main>
  )
}

export default App