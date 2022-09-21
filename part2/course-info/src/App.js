const Course = ({ course }) => {
  const sum = course.parts.reduce((total, currentVal) => {
    return total + currentVal.exercises
  }, 0)

  return (
    <div>
      <h2>{course.name}</h2>
      {course.parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)}
      Total of exercises is: <strong>{sum}</strong> <br />
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <h1>Course information</h1>
      <hr />
      {courses.map(course => <Course course={course} key={course.id} />)}
    </>
  )
}
export default App