
import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomeHero from './Components/Home'
import HomeCenter from './Components/HomeCenter'
import HelpYou from './Components/HelpYou'
import CoreValues from './Components/CoreValues'
import BusinessesCard from './Components/BusinessesCard'
import MissionVisionValues from './Components/MIssion'
import HeroSection from './Components/HeroSection'
// import Home from './Pages/Home'

function App() {
  return (
    <div>
      <Header/>
      <HomeHero/>
      <HomeCenter/>
      <HelpYou/>
      <CoreValues/>
      <BusinessesCard/>
      <MissionVisionValues/>
      <HeroSection/>
      <Footer/>
      {/* <Home/> */}
    </div>
  )
}

export default App