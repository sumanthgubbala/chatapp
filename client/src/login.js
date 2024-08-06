import React,{useState} from 'react'
import axios from 'axios';



const Login = () => {
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
        res=> alert(res.data)
    )
}
  return (
    <div>
    <center>
        <form  onSubmit={submitHandler}>
            <h1>Login</h1>
          
            <input type="email" onChange={changehandler}  name="email" placeholder='email'/> <br/>
            <input type="password" onChange={changehandler}  name="password" placeholder='password'/> <br/>
            
            <input type="submit"  value="Register"/>

        </form>
    </center>

    </div>
  )
}

export default Login