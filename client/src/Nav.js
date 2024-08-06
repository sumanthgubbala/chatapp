import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <ul>
            <Link to='/register'><li>register</li></Link>
            <Link to='/login'><li>login</li></Link>

        </ul>
    </div>
  )
}

export default Nav