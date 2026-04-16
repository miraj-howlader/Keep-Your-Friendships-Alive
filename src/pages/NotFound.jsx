import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white px-4">
      <div className="text-center">
        
   
        <h1 className="text-8xl md:text-9xl font-extrabold text-blue-500">
          404
        </h1>

   
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
          Page Not Found
        </h2>

        
        <p className="mt-2 text-gray-400 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

     
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-medium transition duration-300"
        >
          Go Back Home
        </Link>

       
      </div>
    </div>
  );
};

export default NotFound;