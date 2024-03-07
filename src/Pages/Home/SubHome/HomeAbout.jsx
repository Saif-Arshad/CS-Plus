import React from "react";
import "./HomeAbout.scss";
import Learn from '../../../Components/Buttons/Learnmore'
import Social from "../../../Components/Social/social.jsx"
export default function HomeAbout() {
  return (
    <div className="HomeAbout">
        <div className="subHomeAboutFirst">
        <div className="sub-Home-About">
        <h1 data-aos="fade-right">Let Us be your</h1>
        <h1 data-aos="fade-down">IT Partner</h1>
          <div className="years-of-experience">
        <div>
            <h2>19+</h2>
            <h5 data-aos="fade-down">Years Of Experience</h5>
        </div>
        <div>
            <h2>152k</h2>
            <h5 data-aos="fade-down">Project Completed</h5>
        </div>
      </div>
    <Social/>

      </div>

      <div className="sub-Home-About">
      <h1 data-aos="fade-right"> CS Plus</h1>
        <h2 data-aos="fade-down">
            Corporate software
        </h2>
        <p>🚀CS plus stand for controlling Solution Plus in our own-managed
          company</p>
        <p>
          we offer you consulting and implemention services of the highest
          quality and sucessful implementation of your project
        </p>
        <p>We are specialists in planning and reporting </p>
        <p>
          With extensive know-how we support the financial department of your
          company with introduction and expansion of a CCH Tagetik solution of
          your corporate performance management
        </p>
        <p>
         As a team we aim to offer our customers
            added value and live our 'plus' throught a
            protactive and solution-oriented way of working 
        </p>
        <Learn/>
      </div>
        </div>
   
    </div>
  );
}
