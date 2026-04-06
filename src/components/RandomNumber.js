import { useState } from "react";

function Random() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0); // track clicks

  const generateNumber = () => {
    if (count < 10) {
      const random = Math.floor(Math.random() * 100) + 1;
      setNumber(random);
      setCount(count + 1);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: "#dcfce7",
        padding: "30px",
        borderRadius: "10px"
      }}
    >
      <h1 style={{ color: "blue" }}>Random Number Generator</h1>

      <h2 style={{ fontSize: "40px", color: "green" }}>
        {number}
      </h2>

      <p>Chances left: {10 - count}</p>

      <button
        onClick={generateNumber}
        disabled={count >= 10}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: count >= 10 ? "gray" : "black",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: count >= 10 ? "not-allowed" : "pointer"
        }}
      >
        {count >= 10 ? "No Chances " : "Generate"}
      </button>
    </div>
  );
}

export default Random;