import { useContext, useState } from "react";
import { FriendContext } from "../context/FriendContext";
import { MessageCircle, Phone, Video } from "lucide-react";


const Timeline = () => {
  const { timeline } = useContext(FriendContext);

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  
  const getIcon = (type) => {
    if (type === "Call") return <Phone className="text-green-500" />;
    if (type === "Text") return <MessageCircle className="text-blue-500" />;
    if (type === "Video") return <Video className="text-purple-500" />;
  };

  
  const filteredTimeline = timeline.filter((item) => {
    const matchFilter =
      filter === "All" || item.type === filter;

    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase());

    return matchFilter && matchSearch;
  });

  return (
    <div className="max-w-4xl mx-auto p-6">

      
      <h1 className="text-2xl font-bold mb-6"> Timeline</h1>

      
      <div className="flex flex-col md:flex-row gap-4 mb-6">

        
        <input
          type="text"
          placeholder="Search call text video "
          className="border p-2 rounded w-full"
          onChange={(e) => setSearch(e.target.value)}
        />

       
        <select
          className="border p-2 rounded"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>

      
      {filteredTimeline.length === 0 && (
        <p className="text-gray-500">No matching interactions found.</p>
      )}

   
      <div className="space-y-4">
        {filteredTimeline.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white shadow p-4 rounded-xl"
          >
          
            <div className="text-xl">
              {getIcon(item.type)}
            </div>

           
            <div className="flex-1">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-500">
                📅 {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Timeline;