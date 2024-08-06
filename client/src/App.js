import React from 'react'

import {BrowserRouter,Route,Routes} from 'react-router-dom';

import Nav from './Nav'
import Register from './Register';

import Login from './login'
import MyProfile from './Myprofie';


const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Nav>
      <Routes>
            <Route path='/register' Component={Register} />
            <Route path='/login' element={<Login />} />
            <Route path='/myprofile' element={<MyProfile />} />
      </Routes>

      </Nav>
    </BrowserRouter>

    </div>
  )
}

export default App