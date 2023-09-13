import { useState } from 'react'
import Nav from './Nav'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Players from './Components/Players'
import Create from './Components/Create'
import Detail from './Components/Detail'

function App() {

  return (
    <>
    <h1>Puppy Bowl</h1>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Players' element={<Players/>} />
      <Route path='/Create' element={<Create/>} />
      <Route path='/Players/:id' element={<Detail/>} />
    </Routes>
    </>
  )
}

export default App

//https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players
