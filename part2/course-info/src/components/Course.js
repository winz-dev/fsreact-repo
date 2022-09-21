const Course = ({course}) => {
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

  export default Course
