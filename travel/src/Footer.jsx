

// import React, { useState } from 'react';

// function App() {
//   const [celsius, setCelsius] = useState('');
//   const [fahrenheit, setFahrenheit] = useState('');

//   const convertCelsius = (e) => {
//     const c = e.target.value;
//     setCelsius(c);
//     if (c === '') {
//       setFahrenheit('');
//     } else {
//       setFahrenheit(((parseFloat(c) * 9/5) + 32).toFixed(2));
//     }
//   };

//   const convertFahrenheit = (e) => {
//     const f = e.target.value;
//     setFahrenheit(f);
//     if (f === '') {
//       setCelsius('');
//     } else {
//       setCelsius(((parseFloat(f) - 32) * 5/9).toFixed(2));
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h2>Temperature Converter</h2>
//       <div>
//         <input
//           type="number"
//           value={celsius}
//           onChange={convertCelsius}
//           placeholder="Celsius"
//         />
//         <span> °C</span>
//       </div>
//       <br />
//       <div>
//         <input
//           type="number"
//           value={fahrenheit}
//           onChange={convertFahrenheit}
//           placeholder="Fahrenheit"
//         />
//         <span> °F</span>
//       </div>
//     </div>
//   );
// }

// export default App; 
// import React, { useState } from 'react';

// function Footer() {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);

//   const API_KEY = 'eccc154b8d3507d2d99a125d28b0223b';

//   const getWeather = () => {
//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//     )
//        .then(response => response.json())
//       .then(data => setWeather(data))
//       .catch(error => console.error('Error:', error));
//   };

//   return (
//     <div>
//       <h1>Weather App</h1>
// <input
//         type="text"
//         value={city}
//         onChange={e => setCity(e.target.value)}
//         placeholder="Enter city"
//       />
//       <button onClick={getWeather}>Get Weather</button>

//       {weather && weather.main && (
//         <div>
//           <h2>{weather.name}</h2>
//           <p>Temperature: {weather.main.temp} °C</p>
//           <p>Condition: {weather.weather[0].description}</p>
//           <img
//   src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
//   alt="Weather icon"
// />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Footer;      
import React from 'react'

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default Footer
