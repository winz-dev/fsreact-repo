const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
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
  return (
    <>
      <Part name={props.parts[0].name} number={props.parts[0].exercises} />
      <Part name={props.parts[1].name} number={props.parts[1].exercises} />
      <Part name={props.parts[2].name} number={props.parts[2].exercises} />
    </>
  )
}

const Total = (props) => {
  let total = 0;
  props.parts.map((val, key) => {
    total += val.exercises;
  });
  return (
    <>
      {total}
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <p>Number of exercises: <Total parts={parts} /></p>
    </>
  )
}

export default App