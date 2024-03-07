import React from 'react'
import Google from "../../../Components/Buttons/Google"
import "./Hero.scss"
export default function Hero() {
  return (
    <div className="SectionHero">
        <div className="content">
        <div className="content-Sub">

    <span data-aos="fade-up">CCH Tagetik</span>
        <h1 data-aos="fade-right" >We</h1>
        <h1 data-aos="fade-right">implement</h1>
        <h2  data-aos="fade-left">corporate software</h2>
            <p>
                We implement the corporate 
                software 'CCH Tagetik'
                for planing and report purpose
            </p>
            <Google/>
        </div>
        </div>
    </div>


  )
}
