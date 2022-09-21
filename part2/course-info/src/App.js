const Course = (props) => {
  return (
    <>
      <h1>Course information</h1>
      <hr />
      <h2>{props.course.name}</h2>
      {props.course.parts.map(part => <li>{part.name} {part.exercises}</li>)}
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
      }
    ]
  }

  return <Course course={course} />
}

export default App