import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Timeline from './pages/Timeline'
import Stats from './pages/Stats'
import FriendDetails from './pages/FriendDetails'
import NotFound from './pages/NotFound'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/timeline' element={<Timeline/>}/>
        <Route path='/stats' element={<Stats/>}/>
        <Route path='/friend/:id' element={<FriendDetails/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Toaster/>
      <Footer/>
    </div>
  )
}

export default App