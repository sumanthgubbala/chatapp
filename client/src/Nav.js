
import React ,{useContext,useState} from 'react'
import { Link } from 'react-router-dom'
import { store } from './App'
import './Nav.css';

const Nav = () => {
  const[token,setToken] =useContext(store)
  return (
    <div>
    
    <nav>
    {!token &&
        <ul>
            <Link to='/register'><li>register</li></Link>
            <Link to='/login'><li>login</li></Link>

        </ul>
    }

    </nav>
    </div>
  )
}

export default Nav