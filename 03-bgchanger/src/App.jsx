import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("olive");

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>


      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap gap-3 justify-center bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>{setColor("red")}}  className='outline-none px-4  rounded-lg' style={{backgroundColor:"red"}}> Red </button>
          <button onClick={()=>{setColor("white")}}  className='outline-none px-4  rounded-full' style={{backgroundColor:"white"}}> White </button>
          <button  onClick={()=>{setColor("blue")}} className='outline-none px-4  rounded-full' style={{backgroundColor:"blue"}}> Blue</button>
          <button onClick={()=>{setColor("green")}}  className='outline-none px-4  rounded-full' style={{backgroundColor:"green"}}> Green </button>
          <button  onClick={()=>{setColor("black")}} className='outline-none px-4  rounded-full' style={{backgroundColor:"black"}}> Black </button>
          <button  onClick={()=>{setColor("magenta")}} className='outline-none px-4 rounded-full' style={{backgroundColor:"magenta"}}> Magenta </button>
          <button  onClick={()=>{setColor("teal")}}  className='outline-none px-4  rounded-full' style={{backgroundColor:"teal"}}> Teal</button>
        </div>
      </div>

      </div>
    </>
  )
}

export default App
