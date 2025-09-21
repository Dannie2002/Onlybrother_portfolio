import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import 'aos/dist/aos.css';
import AOS from 'aos';


function App() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
       <Header /> 

      <Hero />
      <About /> 
    </main>
  )
}

export default App