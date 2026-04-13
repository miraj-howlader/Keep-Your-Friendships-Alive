import React from 'react'
import Banner from '../components/Banner'
import AllFriends from '../components/AllFriends'

const Home = () => {
  return (
    <div className=' max-w-7xl container mx-auto'>
        <Banner/>
        <AllFriends/>
    </div>
  )
}

export default Home