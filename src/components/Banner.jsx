import { Plus } from "lucide-react";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Friends to keep close in your life
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 max-w-2xl mx-auto mb-6">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      {/* Button */}
      <button className="inline-flex items-center gap-2 bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">
        <Plus size={18} />
        Add a Friend
      </button>

      {/* Summary Cards (optional but required in your assignment) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        <div className="px-16 py-12  shadow rounded">
            <h1 className="text-4xl font-bold">10</h1>
             <p>Total Friends</p>
            </div>
        <div className="px-16 py-12  shadow rounded">
            <h1 className="text-4xl font-bold">3</h1>
            <p> On Track</p>
            </div>
        <div className="px-16 py-12 shadow rounded">
            <h1 className="text-4xl font-bold">6</h1>
            <p> Need Attention</p>
            </div>
        <div className="px-16 py-12  shadow rounded">
            <h1 className="text-4xl font-bold">12</h1>
            <p>Interactions This Month</p>
            </div>
      </div>

    </div>
  );
};

export default Banner;