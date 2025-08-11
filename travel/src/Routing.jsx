import Home from "./Home"
import { Routes,Route } from "react-router-dom"
import Services from "./Services"
import About from "./About"
import Contact from "./Contact"
const Routing = () => {
  return (
    <div> <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/services" element={<Services/>}/>
          <Route path="/about" element={<About/>}/>
           <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </div>
  )
}

export default Routing