import { useState } from "react"

const App = () => {
 
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })

  const handleRightClick = () => setClicks({...clicks, right: clicks.right + 1})
  
  const handleLeftClick = () => setClicks({...clicks, left: clicks.left + 1})
  
  /*const handleLeftClick = () => {
    const newClick = {
      left : clicks.left + 1,
      right : clicks.right
    }  
    setClicks(newClick)
  }*/

  return (
    <>
      <button onClick={handleLeftClick}>  Left => <strong>{clicks.left}</strong></button>
      <button onClick={handleRightClick}> Right => <strong>{clicks.right}</strong></button>
    </>)
}

export default App; 