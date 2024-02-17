// import css from "./App.module.css";
// import clsx from "clsx";
import { useState, useEffect } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const defaultScores = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const getInitialScores = () => {
  const savedScores = window.localStorage.getItem("scores");

  return savedScores !== null ? JSON.parse(savedScores) : defaultScores;
};

export default function App() {
  const [clicks, setClicks] = useState(getInitialScores());

  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setClicks(defaultScores);
  };

  useEffect(() => {
    window.localStorage.setItem("scores", JSON.stringify(clicks));
  }, [clicks]);

  const options = [
    { type: "good", label: "Good" },
    { type: "neutral", label: "Neutral" },
    { type: "bad", label: "Bad" },
  ];

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const isAnyFeedback = totalFeedback > 0;
  const percentOfPositiveFeedback = Math.round(
    ((clicks.good + clicks.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />

      {options.map((option) => (
        <Options
          key={option.type}
          totalFeedback={totalFeedback}
          updateFeedback={() => updateFeedback(option.type)}
        >
          {option.label}
        </Options>
      ))}

      {isAnyFeedback && <button onClick={resetFeedback}>Reset</button>}

      {isAnyFeedback && (
        <>
          {options.map((option) => (
            <Feedback key={option.type} value={clicks[option.type]}>
              {option.label}
            </Feedback>
          ))}

          {`Total: ${totalFeedback}`}
          {`Positive: ${percentOfPositiveFeedback}%`}
        </>
      )}

      {!isAnyFeedback && <Notification />}
    </>
  );
}
