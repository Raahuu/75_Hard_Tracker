import React from "react";

const AccountSettings = () => {
  return (
    <div>
      <p>Account Settings</p>
      <div className="my-5">
        <label htmlFor="">First name</label>
        <input type="text" />
      </div>

      <div className="my-5">
        <label htmlFor="">Last name</label>
        <input type="text" />
      </div>

      <div className="my-5">
        <label htmlFor="">Email</label>
        <input type="text" />
      </div>

      <div className="my-5">
        <label htmlFor="">Date of Birth</label>
        <input type="text" />
      </div>

      <div className="my-5">
        <label htmlFor="">Username</label>
        <input type="text" />
      </div>

      <div className="my-5">
        <label htmlFor="">Change Profile Picture</label>
        <input type="file" />
      </div>

      <button className="bg-neutral-300 py-2 px-5 rounded">Submit</button>
    </div>
  );
};

export default AccountSettings;
