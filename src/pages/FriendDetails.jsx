import { useParams } from "react-router-dom";
import { useContext } from "react";
import { FriendContext } from "../context/FriendContext";
import toast from "react-hot-toast";
import { Bell, Book, Edit, MessageCircle, Phone, Trash2, Video } from "lucide-react";
import Loader from "../components/Loader";

const FriendDetails = () => {
  const { id } = useParams();
  const { friends, addEvent } = useContext(FriendContext);

  const friend = friends.find(f => f.id === Number(id));

  if (!friend) return <p className="p-6"><Loader/></p>;

  const statusColor = {
    "overdue": "bg-red-100 text-red-600",
    "almost due": "bg-yellow-100 text-yellow-600",
    "on-track": "bg-green-100 text-green-600"
  };


  const handleAction = (type) => {
    addEvent(type, friend.name);
    toast.success(`${type} with ${friend.name} added`);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 grid lg:grid-cols-3 gap-6">

      
      <div className="bg-white rounded-2xl shadow p-6 text-center">

        
        <img
          src={friend.picture}
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />

        
        <h2 className="text-xl font-bold">{friend.name}</h2>

       
        <p className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${statusColor[friend.status]}`}>
          {friend.status}
        </p>

        
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {friend.tags.map((tag, i) => (
            <span key={i} className="bg-gray-100 px-2 py-1 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>

        
        <p className="mt-4 text-gray-600">{friend.bio}</p>

        
        <p className="text-sm text-gray-400 mt-2">{friend.email}</p>

       
        <div className="mt-8 flex flex-col gap-3">
          <button className="bg-white shadow-md py-2 gap-2 rounded-lg flex items-center justify-center">
            <Bell size={16}/> Snooze 2 Weeks
          </button>
          <button className="bg-white shadow-md py-2 gap-2 rounded-lg flex items-center justify-center">
            <Book size={16}/> Archive
          </button>
          <button className="bg-white shadow-md text-red-500 py-2 gap-2 rounded-lg flex items-center justify-center">
            <Trash2 size={16}/> Delete
          </button>
        </div>
      </div>

      
      <div className="lg:col-span-2 space-y-6">

       
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-gray-500 text-sm">Days Since Contact</p>
            <h2 className="text-xl font-bold">{friend.days_since_contact}</h2>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-gray-500 text-sm">Goal</p>
            <h2 className="text-xl font-bold">{friend.goal} days</h2>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-gray-500 text-sm">Next Due</p>
            <h2 className="text-xl font-bold">{friend.next_due_date}</h2>
          </div>
        </div>

        <div className="bg-white p-5 flex justify-between rounded-xl shadow">
         <div>
             <h2 className="font-semibold mb-2">Relationship Goal</h2>
          <p>Stay connected every {friend.goal} days</p>
         </div>
         <div className="">
             <button className="mt-3 px-4 py-1 bg-gray-200 rounded">
           Edit
          </button>
         </div>
        </div>

       
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Quick Check-In</h2>

          <div className="flex flex-wrap gap-8 items-center justify-center">
            <button
              onClick={() => handleAction("Call")}
              className=" flex gap-2 flex-col px-12 cursor-pointer py-8 bg-gray-100  rounded-lg"
            >
              <Phone/> Call
            </button>

            <button
              onClick={() => handleAction("Text")}
              className=" flex gap-2 flex-col  cursor-pointer px-12 py-8 bg-gray-100  rounded-lg"
            >
              <MessageCircle/> Text
            </button>

            <button
              onClick={() => handleAction("Video")}
              className=" flex gap-2  cursor-pointer flex-col px-12 py-8 bg-gray-100  rounded-lg"
            >
              <Video/> Video
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FriendDetails;