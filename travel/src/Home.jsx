import React, { useEffect, useState } from 'react';

const Home = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((res) => res.json())
      .then((data) => {
        // Handle both array and object cases safely
        if (Array.isArray(data)) {
          setNames(data);
        } else if (data && Array.isArray(data.message)) {
          setNames(data.message);
        } else {
          setNames([]); // fallback if data is not in expected format
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setNames([]);
      });
  }, []);

  return (
    <div>
      <h3>Data</h3>
      {names.length > 0 ? (
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
};

export default Home;
