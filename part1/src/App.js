import { useState } from "react"

const App = () => {
 
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
    allClicks: []
  })

  const handleRightClick = () => setClicks({...clicks, right: clicks.right + 1, allClicks: clicks.allClicks.concat('R')})
  
  const handleLeftClick = () => setClicks({...clicks, left: clicks.left + 1, allClicks: clicks.allClicks.concat('L')})
  
  return (
    <>
      <button onClick={handleLeftClick}>  Left => <strong>{clicks.left}</strong></button>
      <button onClick={handleRightClick}> Right => <strong>{clicks.right}</strong></button>
      <p>{clicks.allClicks.join('-')}</p>
    </>)
}

export default App; 