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
    setData({ ...data, [e.target.name]: e.target.value });
};
const submitHandler = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:5000/register', data)
            .then((res) => {
                alert(res.data);
            })
}
  return (
    <div>
    <center>
        <form  onSubmit={submitHandler}>
            <h1>Register</h1>
            <input type="text" onChange={changehandler} name="username" placeholder='Username' required /> <br />
                    <input type="email" onChange={changehandler} name="email" placeholder='Email' required /> <br />
                    <input type="password" onChange={changehandler} name="password" placeholder='Password' required /> <br />
                    <input type="password" onChange={changehandler} name="confirmPassword" placeholder='Confirm Password' required /> <br />
                    <input type="submit" value="Register" />

        </form>
    </center>

    </div>
  )
}

export default Register