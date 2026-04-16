import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white mt-10">
      
      {/* Top Section (centered) */}
      <div className="max-w-5xl mx-auto px-4 py-10 text-center">
        <h2 className="text-6xl font-semibold">KeenKeeper</h2>
        
        <p className="mt-3 text-gray-400 max-w-md mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
         <h1 className="text-3xl mt-4">Social Links</h1>

      
        <div className="flex  justify-center gap-6 mt-6 text-xl">
          <a href="#" className="hover:text-blue-500 transition">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-sky-400 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            <FaGithub />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
        </div>
      </div>

    
      <div className="border-t border-gray-700 px-64 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        
      
        <p>© {new Date().getFullYear()} KeenKeeper All rights reserved.</p>

      
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white transition">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;