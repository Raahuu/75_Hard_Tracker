import React from "react";

const Diet = () => {
  return (
    <div>
      <h1>Diet</h1>
      <p>
        This includes the diet you are going to stick on throughout this 75 days
      </p>

      <p>
        Your diet can consist anything you would want, the key here is your
        consistency to stick onto this diet
      </p>

      <label htmlFor="hip">Food Item Name</label>
      <input type="text" />

      <label htmlFor="waist">Food Item Name</label>
      <input type="text" />

      <p>+ Add food Item</p>
      <button>Submit</button>
    </div>
  );
};

export default Diet;
