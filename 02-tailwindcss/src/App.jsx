import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <p className='bg-green-400 text-black  rounded-md'>Paras Bhau</p>
     <Card day={"wed"}/>
    </>
  )
}

export default App