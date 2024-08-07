import React,{useState,useContext} from 'react'
import axios from 'axios';
import { store } from './App';
import { Navigate } from 'react-router';



const Login = () => {

    const [token,setToken] =useContext(store)

    const [data, setData] = useState({
       
        email:'',
        password:''
    });
const changehandler = e =>{
    setData({...data,[e.target.name]:e.target.value})
}
const submitHandler = e =>{
    e.preventDefault();
    axios.post('http://localhost:5000/login',data).then(

        res=> setToken(res.data.token)
    )
}
if(token){
   return <Navigate to= '/myprofile' />
}
  return (
    <div>
    <center>
        <form  onSubmit={submitHandler} autoComplete='off'>
            <h1>Login</h1>
          
            <input type="email" onChange={changehandler}  name="email" placeholder='email'/> <br/>
            <input type="password" onChange={changehandler}  name="password" placeholder='password'/> <br/>
            
            <input type="submit"  value="Login"/>

        </form>
    </center>

    </div>
  )
}

export default Login