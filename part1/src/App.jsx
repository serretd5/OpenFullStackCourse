

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part1}
      </p>
      <p>
        {props.part2}
      </p>
      <p>
        {props.part3}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
       Number of exercises: {props.suma}
      </p>
    </div>
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
    <div>
      <Header course={course}/>
      <Content part1={parts[0]['name']['exercises']} part2={parts[1]['name']['exercises']} part3 = {parts[3]['name']['exercises']}/>
      <Total suma = {parts[0][1] + parts[1][1] + parts[2][1]}/>
    </div>
  )
}

export default App