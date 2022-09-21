const Course = (props) => {
  const sum = props.course.parts.reduce((total, currentVal) => {
    console.log('total: ', total, '\n CurrentValue: ', currentVal)
    return total + currentVal.exercises
  }, 0)

  return (
    <>
      <h1>Course information</h1>
      <hr />
      <h2>{props.course.name}</h2>
      {props.course.parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)}
      <br />
      Total of exercises is: <strong>{sum}</strong>
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 7,
        id: 4
      },
      {
        name: 'React Native',
        exercises: 25,
        id: 5
      }
    ]
  }

  return <Course course={course} />
}

export default App