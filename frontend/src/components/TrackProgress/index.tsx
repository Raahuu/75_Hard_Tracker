import React from "react";

const TrackProgress = () => {
  return (
    <div>
      {/* Progress Photos */}
      <p className="bg-slate-300">Progress Photo</p>
      <input type="file" name="" id="" />
      <p>You already uploaded your today's photo. Come back tomorrow</p>
      <p>
        You took <span className="font-bold">31</span> progress pictures of
        yourself till now
      </p>

      {/* Book Reading */}
      <p className="bg-slate-300">Book Reading</p>
      <label htmlFor="">Enter book name</label>
      <input type="text" />
      <div className="my-2">
        <label htmlFor="">From page</label>
        <input type="text" />
        <label htmlFor="">To page</label>
        <input type="text" />
      </div>
      <p>
        You read <span className="font-bold">30</span> pages of{" "}
        <span className="font-bold">I too had a lovestory</span>
      </p>
      <div>
        <input type="checkbox" name="" id="" />
        Mark book as completed
      </div>
      <button className="bg-green-400 py-2 px-5 rounded">Submit</button>

      {/* Diet */}
      <p>Diet without cheat meals</p>

      <label htmlFor="">Enter what you ate (Choose all that applies)</label>
      <select name="" id="">
        <option value="1">Idli</option>
        <option value="1">Dosa</option>
        <option value="1">Kadala</option>
        <option value="1">Appam</option>
        <option value="1">Kanji</option>
        <option value="1">Other</option>
      </select>
      <label htmlFor="">Enter what other food did you eat today?</label>
      <input type="text" />

      <label htmlFor="">Capture an image of your food</label>
      <input type="file" name="" id="" />

      {/* Water drinking */}
      <p className="bg-slate-300">Water drinking</p>
      <p>How many cups of water did you drink? (considering 1 cup = 250ml)</p>
      <button className="bg-red-600 py-2 px-5 rounded">- Remove</button>
      <input type="number" />
      <button className="bg-green-400 py-2 px-5 rounded">+ Add</button>
      <p>
        You drank <span className="font-bold">500</span> ml of water and a total
        of <span className="font-bold">2</span> litres today
      </p>
      <button className="bg-green-400 py-2 px-5 rounded">Submit</button>

      {/* Outdoor exercise */}
      <p className="bg-slate-300">Outdoor exercise</p>
      <input type="radio" name="outdoor_exercise" id="1" /> Start Timer
      <input type="radio" name="outdoor_exercise" id="2" /> Enter manually
      <label htmlFor="">How long did you workout today (in minutes)</label>
      <input type="text" />
      <p>02 : 34 : 25</p>
      <div>
        <p>hrs</p>
        <p>mins</p>
        <p>sec</p>
      </div>
      <button className="bg-red-300 py-2 px-4 m-3 rounded">Start</button>
      <button className="bg-red-300 py-2 px-4 m-3 rounded">Stop</button>
      <button className="bg-red-300 py-2 px-4 m-3 rounded">Pause</button>
      <p>
        You completed <span className="font-bold">15</span>hours{" "}
        <span className="font-bold">30</span>minutes outdoor till now
      </p>

      {/* Indoor exercise */}
      <p className="bg-slate-300">Indoor exercise</p>
      <input type="radio" name="indoor_exercise" id="1" /> Start Timer
      <input type="radio" name="indoor_exercise" id="2" /> Enter manually
      <label htmlFor="">How long did you workout today (in minutes)</label>
      <input type="text" />
      <p>02 : 34 : 25</p>
      <div>
        <p>hrs</p>
        <p>mins</p>
        <p>sec</p>
      </div>
      <button className="bg-red-300 py-2 px-4 m-3 rounded">Start</button>
      <button className="bg-red-300 py-2 px-4 m-3 rounded">Stop</button>
      <button className="bg-red-300 py-2 px-4 m-3 rounded">Pause</button>
      <p>
        You completed <span className="font-bold">15</span>hours{" "}
        <span className="font-bold">30</span>minutes indoor till now
      </p>
    </div>
  );
};

export default TrackProgress;
