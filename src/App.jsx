import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Num from './component/num'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Num/>
      
    </>
  )
}

export default App
