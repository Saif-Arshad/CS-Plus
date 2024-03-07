import React from 'react'
import Hero from './SubHome/Hero'
import Header from '../../Components/Header/Header'
import HomeAbout from './SubHome/HomeAbout'
import './Home.scss'
import Footer from '../../Components/Footer/footer'
export default function Home() {
  return (
   <>
   <div className="HomePage">

   <Header/>
    <Hero/>
    <HomeAbout/>
    <Footer/>
   </div>
   </>
  )
}
