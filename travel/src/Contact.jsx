// import "./css/style.css"
// import { useState } from "react"

// const Contact = () => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [submittedData, setSubmittedData] = useState(null)

//   const formHandler = (e) => {
//     e.preventDefault()
//     setSubmittedData({ name, email, password })
//   }

//   return (
//     <div className="main">
//       <form onSubmit={formHandler} className="form_Container">
//         <input
//           type="text"
//           placeholder="Name..."
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email..."
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <input type="submit" value="Submit" />
//       </form>

//       {submittedData && (
//         <div>
//           <h2>Submitted Data:</h2>
//           <p><strong>Name:</strong> {submittedData.name}</p>
//           <p><strong>Email:</strong> {submittedData.email}</p>
//           <p><strong>Password:</strong> {submittedData.password}</p>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Contact
import "./css/style.css"
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const [message, setMessage] = useState("");

  const formHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      setMessage(data.message || "Data submitted successfully");
      setSubmittedData({ name, email, password });

      // Clear inputs
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Error submitting form");
    }
  };

  return (
    <div className="main">
      <form onSubmit={formHandler} className="form_Container">
        <input
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="Submit" />
      </form>

      {message && <p className="message">{message}</p>}

      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Data:</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
