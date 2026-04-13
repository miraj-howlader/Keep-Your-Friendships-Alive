import React, { useContext } from 'react'
import { FriendContext } from '../context/FriendContext'
import FriendCard from './FriendCard'

const AllFriends = () => {
    const {friends}=useContext(FriendContext)
    
  return (
    <div>
        <h1 className='text-3xl p-3 font-bold '>Your Friends</h1>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6'>
            {
                friends.map((friend)=>(
                    <FriendCard key={friend.id} friend={friend}/>
                ))
            }
        </div>
    </div>
  )
}

export default AllFriends