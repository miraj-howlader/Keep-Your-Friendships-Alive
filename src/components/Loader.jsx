const Loader = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">

    
      <div className="w-14 h-14 border-4 border-gray-300 border-t-green-600 rounded-full animate-spin"></div>

      <p className="mt-4 text-gray-600 font-medium">
        Loading your friends...
      </p>

    </div>
  );
};

export default Loader;