import React from 'react'
import serviceone from "../../assets/Images/Services/one.jpg"
import servicetwo from "../../assets/Images/Services/two.jpg"
import servicethree from "../../assets/Images/Services/three.jpg"
import Footer from '../../Components/Footer/footer'
import './Service.scss'
import Header from '../../Components/Header/Header'
export default function HomeService() {

  return (
    <>
    <Header/>
    <div className='HomeServices'>
      <h1 className='first-h1'>CS Plus Services</h1>
    <p>Service that we provide you </p>
    <div className="servicecard">
            <div className="subcard-service">
                <div className="left">

                    <img src={serviceone} alt="" />
                </div>
                <div className="right">

                <h1>The IFRS16 lease Accounting</h1>

            <p>
                    we are very happy to assist you with the IFRS16 
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, vel aliquam.     complaint mapping of your lease contracts. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam minima eaque a, soluta rem harum officiis. Suscipit ut debitis quae ipsa.
           </p>
                </div>
            </div>
            <div className="subcard-service">
                <div className="left">

                    <img src={servicetwo} alt="" />
                </div>
        <div className="right">

                <h1>Integrated Financial planing </h1>
<p>
                    we are very happy to assist you with the Integrated Financial planing
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, optio eveniet.   complaint mapping of your lease contracts. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam minima eaque a, soluta rem harum officiis. Suscipit ut debitis quae ipsa.
    </p>
        </div>
            </div>
            
            <div className="subcard-service">
                <div className="left">

                    <img src={servicethree} alt="" />
                </div>
                <div className="right">
                        
                <h1>Icreated Annual report </h1>
<p>
                    we are very happy to assist you with the Icreated Annual report
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, ipsam consequuntur?   complaint mapping of your lease contracts. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam minima eaque a, soluta rem harum officiis. Suscipit ut debitis quae ipsa.
</p>
                </div>
            </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}
