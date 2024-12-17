import React,{useState,useContext} from 'react'

import UserContext  from '../context/UserContext'

function Login() {
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');

    const {setUser} = useContext(UserContext)//Setting the data  into   context

    const handleSubmit = (e) =>{
        e.preventDefault() ;//prevents the default nature of submitting a response somewhere else
        setUser({username,password}) //sets the username and password into the context

    }
// returning a login form where on change the password and the username is being set

  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='username' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        <input type="text" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login