

import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [percent, setPercent] = useState(0)
  const [average, setAverage] = useState(0)
  const [sentiment, setSentiment] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setTotal(total + 1)
    setPercent((good + 1)/(total + 1))
    setSentiment(sentiment+1)
    console.log('value now', good)
    console.log('value now', bad)
    console.log('value now', neutral)
    console.log('value now', total)
    setAverage((sentiment+1)/(total+1))
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
    setPercent((good)/(total + 1))
    setAverage((sentiment)/(total + 1))
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    setPercent(good/(total + 1))
    setSentiment(sentiment - 1)
    setAverage((sentiment - 1)/(total + 1))
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {total}</p>
      <p>Average: {average}</p>
      <p>Percent: {percent}</p>
      

    </div>
  )
}

export default App