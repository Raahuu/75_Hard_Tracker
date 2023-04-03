import React from "react";

const Gallery = () => {
  return (
    <div>
      <p>Your daily images</p>
      <img src="" alt="day_1" />
      <img src="" alt="day_1" />
      <img src="" alt="day_1" />
      <img src="" alt="day_1" />

      <p>Your diet food images</p>
      <img src="" alt="day_1" />
      <img src="" alt="day_1" />
      <img src="" alt="day_1" />

      <button className="bg-red-500 rounded py-2 px-5">Download all</button>
      <p>
        Please note that all these images will be removed from our server one
        week after the completion/failure/stop of this challenge.
        <br></br>
        You will continue to see your images here as they were visible early,
        but will not be available on other devices or other browsers.
        <br></br>
        So please download if you want a copy of your images
      </p>
    </div>
  );
};

export default Gallery;
