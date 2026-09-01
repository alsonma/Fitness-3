import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Class from './components/Class/Class'
import Time from './components/Time/Time'
import Team from './components/Team/Team'
import News from './components/News/News'

export default function App() {
  return (
    <div>
        <Header />
       <Hero />
       <Programs />
       <Class />
       <Time />
       <Team />
       <News />
        <Footer />
    </div>
  )
}
