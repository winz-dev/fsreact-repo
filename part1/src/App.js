const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>)
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.number}
      </p>
    </>
  )
}

const Content = (props) => {
  //console.log("Contents: ", props);
  let parts = props.course.parts;
  return (
    <>
      <Part name={parts[0].name} number={parts[0].exercises} />
      <Part name={parts[1].name} number={parts[1].exercises} />
      <Part name={parts[2].name} number={parts[2].exercises} />
    </>
  )
}

const Total = (props) => {
  let total = 0;
  props.course.parts.map((val, key) => {
    total += val.exercises;
    return total;
  });
  return (
    <>
      {total}
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <p>Number of exercises: <Total course={course} /></p>
    </>
  )
}

export default App