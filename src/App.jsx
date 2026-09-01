import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Class from './components/Class/Class'
import Time from './components/Time/Time'
import Team from './components/Team/Team'
import News from './components/News/News'
import {Route, Routes, BrowserRouter} from 'react-router-dom';

import About from './pages/About/About'


export default function App() {
  return (
    <div>
        <BrowserRouter>
      <Header />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Programs />
              <Class />
              <Time />
              <Team />
              <News />
            </>
          }
        />

        {/* About Page */}
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    </div>
  )
}
