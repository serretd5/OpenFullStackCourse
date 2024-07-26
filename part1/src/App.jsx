

import { useState } from 'react';

const Statistics = ({ stats }) => {
  return (
    <div>
      <p>Good: {stats.good}</p>
      <p>Neutral: {stats.neutral}</p>
      <p>Bad: {stats.bad}</p>
      <p>All: {stats.total}</p>
      <p>Average: {stats.average.toFixed(2)}</p>
      <p>Percent: {(stats.percent * 100).toFixed(2)}%</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percent, setPercent] = useState(0);
  const [average, setAverage] = useState(0);
  const [sentiment, setSentiment] = useState(0);

  const handleGoodClick = () => {
    const newGood = good + 1;
    const newTotal = total + 1;
    const newSentiment = sentiment + 1;

    setGood(newGood);
    setTotal(newTotal);
    setPercent(newGood / newTotal);
    setSentiment(newSentiment);
    setAverage(newSentiment / newTotal);
  };

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1;
    const newTotal = total + 1;

    setNeutral(newNeutral);
    setTotal(newTotal);
    setPercent(good / newTotal);
    setAverage(sentiment / newTotal);
  };

  const handleBadClick = () => {
    const newBad = bad + 1;
    const newTotal = total + 1;
    const newSentiment = sentiment - 1;

    setBad(newBad);
    setTotal(newTotal);
    setPercent(good / newTotal);
    setSentiment(newSentiment);
    setAverage(newSentiment / newTotal);
  };

  const stats = {
    good,
    neutral,
    bad,
    total,
    average,
    percent,
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      {total > 0 ? (
        <Statistics stats={stats} />
      ) : (
        <p>No feedback given yet</p>
      )}
    </div>
  );
};

export default App;
