import { useNavigate } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();

  const statusColor = {
    "overdue": "bg-red-500 text-white",
    "almost due": "bg-yellow-300 text-yellow-600",
    "on-track": "bg-green-400 text-white"
  };

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white rounded-2xl shadow p-5 cursor-pointer hover:shadow-lg transition text-center"
    >
      
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-20 h-20 mx-auto rounded-full object-cover mb-3"
      />

      
      <h2 className="font-semibold text-lg">{friend.name}</h2>

    
      <p className="text-sm text-gray-500 mt-1">
        {friend.days_since_contact} days ago
      </p>

      
      <div className="flex justify-center flex-wrap gap-2 mt-3">
        {friend.tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-pink-200 px-3 py-2 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      
      <div className="mt-4">
        <span
          className={`px-3 py-1 text-xs rounded-full ${statusColor[friend.status]}`}
        >
          {friend.status}
        </span>
      </div>
    </div>
  );
};

export default FriendCard;