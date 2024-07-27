

import { useState } from 'react';

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);


const StatisticLine = ({ text, value }) => (
  <p>{text}: {value}</p>
);


const Statistics = ({ stats }) => {
  return (
    <div>
      <StatisticLine text="Good" value={stats.good}/>
      <StatisticLine text="Bad" value={stats.bad}/>
      <StatisticLine text="Neutral" value={stats.neutral}/>
      <StatisticLine text="Total" value={stats.total}/>
      <StatisticLine text="Average" value={stats.average.toFixed(2)}/>
      <StatisticLine text="Percent" value={(stats.percent * 100).toFixed(2)}/>
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
      <Button onClick={handleGoodClick} text="Good"/>
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />
      {total > 0 ? (
        <Statistics stats={stats} />
      ) : (
        <p>No feedback given yet</p>
      )}
    </div>
  );
};

export default App;
