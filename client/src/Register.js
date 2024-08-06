import React,{useState} from 'react'
import axios from 'axios';



const Register = () => {
    const [data, setData] = useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    });
const changehandler = e =>{
    setData({...data,[e.target.name]:e.target.value})
}
const submitHandler = e =>{
    e.preventDefault();
    axios.post('http://localhost:5000/register',data).then(
        res=> alert(res.data)
    )
}
  return (
    <div>
    <center>
        <form  onSubmit={submitHandler}>
            <label>Username:</label>
            <input type="text"  onChange={changehandler} name="username" placeholder='username'/> <br/>
            <input type="email" onChange={changehandler}  name="email" placeholder='email'/> <br/>
            <input type="password" onChange={changehandler}  name="password" placeholder='password'/> <br/>
            <input type="password" onChange={changehandler}  name="confirmpassword" placeholder='confirmpassword'/> <br/>
            <input type="submit"  value="Register"/>

        </form>
    </center>

    </div>
  )
}

export default Register