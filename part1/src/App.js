import { useState } from 'react'

const PreferredAnecdotes = ({ electedVote, vote }) => {
  if (vote) {
    return (
      <>
        <h2>Anecdote with most largest votes</h2>
        <p>{electedVote}</p>
        <NumberTimesSelected num={vote} />
      </>)
  }
  return (<><p> Please let us know your preference anecdote</p></>)
}

const NumberTimesSelected = ({ num }) => {
  if (num > 0) {
    return <><p>Has <strong>{num} </strong>votes</p></>
  }
  return (<><p>No votes for this anecdote</p></>)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([])

  const initVotes = () => {

    if (!votes.length) {
      var tab = new Array(anecdotes.length).fill(0);
      setVotes([...tab])
    }
  }

  const mostVoted = () => {

    var maxVote = 0
    var indexOfMax = 0
    var i;
    for (i = 1; i < votes.length; i++) {
      var value = votes[i];
      if (value > maxVote) {
        maxVote = value
        indexOfMax = i
      }
    }
    return indexOfMax;
  }

  const addVotes = () => {
    var votesTab = [...votes]
    if (!votesTab[selected]) {
      votesTab[selected] = 1
    }
    else {
      votesTab[selected] += 1
    }
    setVotes([...votesTab])
  }

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  initVotes();

  return (
    <div>
      <h1>Anecdote</h1>
      <hr />
      <h2>Anecdote of the day</h2>
      <blockquote>{anecdotes[selected]}</blockquote>
      <NumberTimesSelected num={votes[selected]} />
      <button onClick={addVotes} >votes</button>
      <button onClick={handleClick}>next anecdote</button>
      <hr />
      <PreferredAnecdotes electedVote={anecdotes[mostVoted()]} vote={votes[mostVoted()]} />
    </div>
  )
}

export default App
