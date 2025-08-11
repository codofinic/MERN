// import { useState } from "react"
// import "./css/style.css"
// const Services = () => {
//   const [value,setValue]=useState("")
//   return (
//     <div className="main">
//       <h1>Calculator</h1>
//       <div className="outer_layer">
//         <div className="cal_box">
//           <input type="text" name="" id="" value={value} />
//         </div>
//         <div className="control_btn">
//           <button onClick={
//           (e)=>{setValue(value.slice(0,-1)) 
//           }
//           } >AC</button><button onClick={
//           (e)=>{setValue(" ") 
//           }
//           }>DE</button><button value="." onClick={
//           (e)=>{setValue(
//                 value+e.target.value
//               ) 
//           }
//           }>.</button><button value="/" onClick={
//           (e)=>{setValue(
//                 value+e.target.value
//               ) 
//           }
//           }>/</button>
//         </div>
//         <div className="btn_1 control_btn">
//           <button value="7"  onClick={
//           (e)=>{setValue(
//                 value+e.target.value
//               ) 
//           }
//           }>7</button><button value="8" onClick={
//           (e)=>{setValue(
//                 value+e.target.value
//               ) 
//           }
//           }>8</button><button value="9" onClick={
//           (e)=>{setValue(
//                 value+e.target.value
//               ) 
//           }
//           }>9</button><button value="*" onClick={
//           (e)=>{setValue(
//                 value+e.target.value
//               ) 
//           }
//           }>*</button>
//         </div>
//         <div className="btn_1 control_btn">
//           <button value="4" onClick={
//           (e)=>{setValue(
//                 value+e.target.value
//               ) 
//           }
//           }>4</button><button value="5" onClick={
//           (e)=>{setValue(
//                 value+e.target.value
//               ) 
//           }
//           }>5</button><button value="6" onClick={
//           (e)=>{setValue(
//                 value+e.target.value
//               ) 
//           }
//           }>6</button><button value="+" onClick={
//           (e)=>{setValue(
//                 value+e.target.value
//               ) 
//           }
//           }>+</button>
//         </div>
//         <div className="btn_1 control_btn">
//           <button value="1" onClick={
//           (e)=>{setValue(
//                 value+e.target.value
//               ) 
//           }
//           }>1</button><button value="2" onClick={
//           (e)=>{setValue(
//                 value+e.target.value
//               ) 
//           }
//           }>2</button><button value="3" onClick={
//           (e)=>{setValue(
//                 value+e.target.value
//               ) 
//           }
//           }>3</button><button value="-" onClick={
//           (e)=>{setValue(
//                 value+e.target.value
//               ) 
//           }
//           }>-</button>
//         </div>
//         <div className="btn_1 control_btn">
//           <button value="0" onClick={
//           (e)=>{setValue(
//                 value+e.target.value
//               ) 
//           }
//           }>0</button><button onClick={
//           (e)=>{setValue(eval(value)) 
//           }
//           }>=</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Services
import React, { useEffect, useState } from "react";

function Services() {
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/book")
      .then((res) => res.json())
      .then((data) => setBook(data.book))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Book Details</h1>
      {book ? (
        <div>
          <p><b>Name:</b> {book.name}</p>
          <p><b>Price:</b> {book.Price}</p>
          <p><b>Author:</b> {book.Author}</p>
          <p><b>Volume:</b> {book.Volume}</p>
        </div>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
}

export default Services;
