import React from 'react'
import AOS from 'aos';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import 'aos/dist/aos.css';
import Home from './Pages/Home/Home'
import Service from './Pages/Services/Service';
import Products from "./Pages/Software/products"
import Contact from './Pages/Contact/contact';
export default function App() {
  AOS.init();
  return (
    <>
<Router>
         <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Home />}
                        ></Route>
                        <Route
                            exact
                            path="/software"
                            element={<Products/>}
                        ></Route>
                        <Route
                            exact
                            path="/service"
                            element={<Service/>}
                        ></Route>
                        <Route
                            exact
                            path="/contact"
                            element={<Contact />}
                        ></Route>
                    </Routes>
                    </Router>     
    </>
  )
}
