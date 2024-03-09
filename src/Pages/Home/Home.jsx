import React from 'react'
import Hero from './SubHome/Hero'
import Header from '../../Components/Header/Header'
import HomeAbout from './SubHome/HomeAbout'
import './Home.scss'
import Footer from '../../Components/Footer/footer'
import Contact from '../Contact/contact'
import Software from '../Software/products'
export default function Home() {
  return (
   <div className="HomePage">
   <Header/>
    <Hero/>
    <HomeAbout/>
    <Software/>
    <Footer/>
   </div>
  )
}
