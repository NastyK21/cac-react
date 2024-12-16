import React,{useEffect,useState} from 'react'
import { data } from 'react-router-dom'

function Github() {
    const [data,setData ] = useState([])
        useEffect(()=>{
        fetch('https://api.github.com/users/NastyK21')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)

        })
    },[])
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github Followers : {data.followers}</div>
  )
}

export default Github