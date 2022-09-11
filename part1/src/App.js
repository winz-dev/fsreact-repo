import { useState } from 'react'

const StatisticLine = ({name, value}) => {
  return (
    <>
      <li>{name}: {value}</li>
    </>
  )
}

const Statistic = ({ good, neutral, bad }) => {
  let positive = 0;
  let allFeeds = good + neutral + bad
  if (allFeeds) {
    positive = good / allFeeds
  }
  if (allFeeds)
    return (
      <>
        <h2>Statistics</h2>
        <ul>
          <StatisticLine name="Good" value={good} />
          <StatisticLine name="Neutral" value={neutral} />
          <StatisticLine name="Bad" value={bad} />
          <StatisticLine name="All" value={allFeeds} />
          <StatisticLine name="Positive" value={positive} />
          <StatisticLine name="Average" value={(allFeeds / 3)} />
        </ul>
      </>
    )
  return (
    <>
      <h2>Statistics</h2>
      <p>No Feedback given...</p>
    </>)
}

const Button = ({handClickEvent, text}) => {

  return (
    <>
      <button onClick={handClickEvent}>{text}</button>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const incValue = (val) => ((val + 1))
  return (
    <div>
      <h1>Unicafe</h1>
      <hr />
      <h2>Give Feedback</h2>
      <Button handClickEvent={() => incValue(setGood(good + 1))} text="Good" />
      <Button handClickEvent={() => incValue(setNeutral(neutral + 1))} text="Bad" />
      <Button handClickEvent={() => incValue(setBad(bad + 1))} text="Bad" />
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App