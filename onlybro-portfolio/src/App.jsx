import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import MyProject from './Components/my_Project';
import ContactMe from './Components/ContactMe';
import GitConnect from './Components/GitConnect'; 



function App() {
  return (
    <main>
       <Header /> 

      <Hero />
      <About /> 
      <MyProject />
      <ContactMe />
      <GitConnect />
    
    </main>
  )
}

export default App