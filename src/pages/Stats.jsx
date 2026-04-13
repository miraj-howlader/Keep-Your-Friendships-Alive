import { useContext } from "react";
import { FriendContext } from "../context/FriendContext";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const Stats = () => {
  const { timeline } = useContext(FriendContext);

  const callCount = timeline.filter(t => t.type === "Call").length;
  const textCount = timeline.filter(t => t.type === "Text").length;
  const videoCount = timeline.filter(t => t.type === "Video").length;

  const data = [
    { name: "Call", value: callCount },
    { name: "Text", value: textCount },
    { name: "Video", value: videoCount }
  ];

  const COLORS = ["#22c55e", "#3b82f6", "#a855f7"];

  return (
    <div className="max-w-5xl mx-auto p-6 text-center mt-8 ">
         <h1 className="text-3xl flex items-start font-bold mb-8 mt-8">
         Friendship Analytics
      </h1>
      
      <div className=" shadow-md bg-gray-50 p-8 pb-30">
        
      <p className=" flex items-start  text-xl font-bold">By Interaction Type</p>
     

      
      <div className="flex justify-center">
        <PieChart width={350} height={350}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            dataKey="value"
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} className=" rounded-full"/>
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </div>

     
    
      </div>

    </div>
  );
};

export default Stats;