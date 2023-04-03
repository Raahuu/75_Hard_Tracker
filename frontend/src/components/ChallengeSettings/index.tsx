import React from "react";
import { Link } from "react-router-dom";

const ChallengeSettings = () => {
  return (
    <div>
      <p>Challenge Settings</p>

      <p>You can add a reviewer for you current challenge</p>
      <p>
        If you have added a reviewer, he/she will be in charge of monitoring you
        and mark your progress.{" "}
      </p>
      <p>
        The reviewer is capable of resetting your progress if he/she finds any
        of the daily tasks were not completed properly
      </p>

      <p>Your current reviewer is:</p>

      <p>Rahul R (@raahuu)</p>

      <button className="bg-red-300 py-2 px-5 rounded">Remove reviewer </button>

      <div>
        <input type="text" placeholder="Search for reviewer" />
        <button className="bg-green-300 py-2 px-5 rounded">
          {" "}
          + Add reviewer
        </button>
      </div>

      <p>Challenge updates</p>
      <table>
        <thead>
          <th>Slno.</th>
          <th>Date/Time</th>
          <th>Activity</th>
          <th>Reviewer Status</th>
          <th>Action</th>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>01-04-2023 / 18:02:05</td>
            <td>Added breakfast</td>
            <td>Verified</td>
            <td>No actions</td>
          </tr>
          <tr>
            <td>2</td>
            <td>01-04-2023 / 14:09:28</td>
            <td>Added breakfast</td>
            <td>Not Verified</td>
            <td>
              <button>Notify</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>01-04-2023 / 11:57:19</td>
            <td>Added breakfast</td>
            <td>Verified</td>
            <td>No actions</td>
          </tr>
          <tr>
            <td>4</td>
            <td>01-04-2023 / 10:43:36</td>
            <td>Added breakfast</td>
            <td>Verified</td>
            <td>No actions</td>
          </tr>
        </tbody>
      </table>

      <p>31 days overiew</p>

      <p className="bg-slate-300">Book Reading</p>
      <p>
        You read <span className="font-bold">30</span> pages of{" "}
        <span className="font-bold">I too had a lovestory</span>
      </p>
      <p>
        You read <span className="font-bold">30</span> pages of{" "}
        <span className="font-bold">Can love happen twice</span>
      </p>

      <p className="bg-slate-300">Diet</p>
      <p>
        You sticked on to your diet <span className="font-bold">31</span> consecutive days
      </p>

      <p className="bg-slate-300">Water drinking</p>
      <p>
        You drank <span className="font-bold">92.25</span> litres of water in 31 days
      </p>

      <p className="bg-slate-300">Outdoor exercise</p>
      <p>
        You completed <span className="font-bold">15</span>hours{" "}
        <span className="font-bold">30</span>minutes outdoor till now
      </p>

      <p className="bg-slate-300">Indoor exercise</p>
      <p>
        You completed <span className="font-bold">15</span>hours{" "}
        <span className="font-bold">30</span>minutes indoor till now
      </p>

      <p className="bg-slate-300">Progress Photos</p>
      <p>
        You took <span className="font-bold">31</span> progress pictures of
        yourself till now
      </p>

      <p>Quit challenge</p>
      <p>Are you really sure you want to quit this challenge in this point?</p>
      <p>If you wish to proceed use the 'I Quit 75 Hard' button</p>

      <button className="bg-red-600 py-2 px-5 rounded text-white">
        I Quit 75 Hard
      </button>

      <p>
        If you wish to download all your progress photos, go to{" "}
        <Link to="/account-settings">account settings</Link>
      </p>
    </div>
  );
};

export default ChallengeSettings;
