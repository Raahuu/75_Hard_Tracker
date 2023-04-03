import React, { useState } from "react";

const Header = () => {
  const [showProfileDropDown, setShowProfileDropDown] = useState(false);
  return (
    <div className="flex justify-between bg-slate-200 px-10 py-5">
      <div>75 hard Logo</div>

      <p>Current streak : 31 days</p>

      <div onClick={() => setShowProfileDropDown(!showProfileDropDown)}>
        Profile Icon
      </div>
      {showProfileDropDown ? (
        <div>
          <p>Logout</p>
          <p>Profile</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
