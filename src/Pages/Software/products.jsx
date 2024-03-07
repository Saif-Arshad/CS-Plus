import React from 'react'
import Header from '../../Components/Header/Header'
import './product.scss'
import software1 from "../../assets/Images/software1.jpg"
import software2 from "../../assets/Images/Services/one.jpg"
import software3 from "../../assets/Images/Services/two.jpg"
import software4 from "../../assets/Images/Services/three.jpg"
import Learnmore from '../../Components/Buttons/Learnmore'
import Footer from '../../Components/Footer/footer'
export default function products() {
  return (
<>  
<div className="products">
    
    <Header/>
    <h1 className='first-software'>The right Software</h1>
    <p className='first-software-p'>
          Software that we provide you
        </p>
<div className="software">
    <div className="subsoftware">
        <img src={software1} alt="" />
        <div className="softwaretext">
            <h1>CCH Tagetik</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rerum, perspiciatis sequi nulla ipsa cumque tenetur a illo quae aperiam inventore quos eaque dolore laudantium pariatur doloremque fuga nemo aspernatur. Amet, odit exercitationem tempora id hic possimus accusantium et aliquid sequi eaque molestias similique perferendis eos eum ipsam quisquam dolores mollitia reiciendis magni nemo quasi!</p>
            <Learnmore/>
       
        </div>
    </div>
    <div className="subsoftware">
        <img src={software2} alt="" />
        <div className="softwaretext">
            <h1>sturnis365</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rerum, perspiciatis sequi nulla ipsa cumque tenetur a illo quae aperiam inventore quos eaque dolore laudantium pariatur doloremque fuga nemo aspernatur. Amet, odit exercitationem tempora id hic possimus accusantium et aliquid sequi eaque molestias similique perferendis eos eum ipsam quisquam dolores mollitia reiciendis magni nemo quasi!</p>
            <Learnmore/>
     
        </div>
    </div>
    <div className="subsoftware">
        <img src={software3} alt="" />
        <div className="softwaretext">
            <h1>hr management</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rerum, perspiciatis sequi nulla ipsa cumque tenetur a illo quae aperiam inventore quos eaque dolore laudantium pariatur doloremque fuga nemo aspernatur. Amet, odit exercitationem tempora id hic possimus accusantium et aliquid sequi eaque molestias similique perferendis eos eum ipsam quisquam dolores mollitia reiciendis magni nemo quasi!</p>
            <Learnmore/>
       
        </div>
    </div>
    <div className="subsoftware">
        <img src={software4} alt="" />
        <div className="softwaretext">
            <h1>Worker management</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rerum, perspiciatis sequi nulla ipsa cumque tenetur a illo quae aperiam inventore quos eaque dolore laudantium pariatur doloremque fuga nemo aspernatur. Amet, odit exercitationem tempora id hic possimus accusantium et aliquid sequi eaque molestias similique perferendis eos eum ipsam quisquam dolores mollitia reiciendis magni nemo quasi!</p>
            <Learnmore/>
        </div>
    </div>
</div>

</div>
<Footer/>
</>
  )
}
