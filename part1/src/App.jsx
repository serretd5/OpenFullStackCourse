

import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      {good}
      <button onClick={handleGoodClick}>good</button>
      {neutral}
      <button onClick={handleNeutralClick}>neutral</button>
      {bad}
      <button onClick={handleBadClick}>bad</button>
    </div>
  )
}

export default App