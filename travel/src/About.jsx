// import "./css/style.css"
// import { useState } from "react"
// import Footer from "./Footer"
// const About = () => {
//   const [celsius,setCelsius]=useState(' ')
//   const [fahrenheit,setFahrenheit]=useState(' ')
//   const converToCelisius =(e)=>{
//   const c=e.target.value;
//      setCelsius(c)
//      if(c===''){
//       setFahrenheit(' ')
//      }
//      else{
//          setFahrenheit(((parseFloat(c) * 9/5) + 32).toFixed(2))
//      }
//   }
//    const converToFahrenheit =(e)=>{
//   const f=e.target.value;
//   setFahrenheit(f)
//   if(f ===''){
//       setCelsius(' ')
//      }
//      else{
//       setCelsius(((parseFloat(f) - 32) * 5/9).toFixed(2))

//      }
//   }
//   return (
//     <div style={{textAlign:"center"}}>
//       <h1>Temperature Conversion Calculator</h1>
//     <div className='Temp_box'>
//       <div className='fr'>
//         <h1>Degrees Fahrenheit (°F)</h1>
//         <input type="text" name="" id="" placeholder='50.00' value={fahrenheit} onChange={converToCelisius}/>
//       </div>
//       <div className="cs">
//         <h1>Degrees Celsius (°C)</h1>
//         <input type="text" name="" id="" placeholder='10' value={celsius} onChange={converToFahrenheit}/>
//       </div>
//     </div>
//     <Footer/>
//     </div>
//   )
// }

// export default About
import React, { useState } from "react";

function About() {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData
    });

    alert("File uploaded!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default About;
