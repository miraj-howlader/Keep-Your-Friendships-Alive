import { createContext, useState, useEffect } from "react";

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [timeline, setTimeline] = useState([]);

  
  useEffect(() => {
    fetch("/friends.json")
      .then(res => res.json())
      .then(data => setFriends(data));
     
  }, []);

  console.log(friends)

  // Add timeline event
  const addEvent = (type, name) => {
    const newEvent = {
      id: Date.now(),
      type,
      title: `${type} with ${name}`,
      date: new Date().toLocaleDateString()
    };

    setTimeline(prev => [newEvent, ...prev]);
  };

  const value = {
    friends,
    timeline,
    addEvent
  };

  return (
    <FriendContext.Provider value={value}>
      {children}
    </FriendContext.Provider>
  );
};

export default FriendProvider;