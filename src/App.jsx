import { useEffect, useState } from 'react'
import './App.css'
import { ButtonReset } from './components/ButtonReset'

function App() {
  const [position, setPosition] = useState(`{x:-20,y:-20}`)
  const [enable, setEnable] = useState(false)

  useEffect(()=> {

    const handleMove = (event) => {
      const {clientX , clientY } = event
      setPosition({x:clientX,y:clientY})
    }

    if(enable) {
      window.addEventListener('mousemove',handleMove)
    }

    return (()=> {
      window.removeEventListener('mousemove',handleMove)
    })
  },[enable])

  const updateButton = ()=> {
    setEnable(!enable)
  }

  return( 
    <>
      <div className="cursor" style={{ transform: `translate(${position.x}px, ${position.y}px)`}}></div>
      <ButtonReset updateButton={updateButton} enable={enable}/>
    </>
  )
}

export default App
