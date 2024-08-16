import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const LeetcodeProfile = ({ userData }) => {
  const totalSolved = userData.submitStats.acSubmissionNum.reduce((sum, stat) => sum + stat.count, 0);

  const difficulties = {
    Easy: "bg-green-600",
    Medium: "bg-yellow-600",
    Hard: "bg-red-600",
    All: "bg-blue-600",
  };

  return (
    <div className="bg-gray-800 text-white shadow-lg rounded-lg p-6 max-w-xl mx-auto mt-10 mb-10">
      <h2 className="text-xl font-bold text-white mb-4">Solved Problems</h2>
      <div className="flex items-center justify-between">
        {/* Circular Progress Bar */}
        <div className="w-24 h-24">
          <CircularProgressbar
            value={totalSolved}
            maxValue={1000}  // Adjust max value as needed
            text={`${totalSolved} Solved`}
            styles={buildStyles({
              textSize: '12px',
              pathColor: `orange`,
              textColor: '#fff',
              trailColor: '#d6d6d6',
            })}
          />
        </div>
        {/* Difficulty Stats */}
        <div className="flex-1 ml-6 space-y-4">
          {userData.submitStats.acSubmissionNum.map((stat, index) => (
            <div key={index}>
              <div className="flex justify-between items-center text-sm text-white">
                <span>{stat.difficulty}</span>
                <span>
                  <strong>{stat.count}</strong> / {stat.submissions}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full ${difficulties[stat.difficulty]}`}
                  style={{
                    width: `${(stat.count / stat.submissions) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LeetcodeProfile;
