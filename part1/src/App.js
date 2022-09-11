import { useState } from 'react'

const Statistic = ({good, neutral, bad}) => {
  let positive = 0;
  let allFeeds = good + neutral + bad
  if (allFeeds) {
    positive = good / allFeeds
  }

  return (
    <>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>All: {allFeeds}</li>
        <li>Positive: {positive}</li>
        <li>Average: {(good + neutral + bad) / 3}</li>
      </ul>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Unicafe</h1>
      <hr />
      <h2>Give Feedback</h2>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App