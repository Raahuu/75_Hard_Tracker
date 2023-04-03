import React from "react";

const BMI = () => {
  return (
    <div>
      <h1>BMI</h1>

      <label htmlFor="height">Enter height</label>
      <input type="text" />

      <label htmlFor="weight">Enter Weight</label>
      <input type="text" />

      <p>Your BMI is 21.5</p>

      <p>You come under obese category</p>

      <button>Submit</button>
    </div>
  );
};

export default BMI;
