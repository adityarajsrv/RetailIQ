import Navbar from "../components/Navbar";
import { FaRobot } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="ml-20 w-[90%] mt-10">
        <div className= "py-5 px-4 bg-linear-to-r from-blue-100 to-blue-50 rounded-2xl shadow-md">
          <div className="flex flex-row justify-start space-x-4">
            <h2 className="text-xl font-bold">
              Recover $1,245 by engaging cart abandoners
            </h2>
            <p className="bg-green-400 rounded-2xl flex flex-row items-center px-5 py-0 font-semibold text-center text-white text-xs">
              High Impact
            </p>
          </div>
          <p className="text-gray-500 mt-2 text-md">
            23 customers abandoned their carts in the last 48 hours. Send them a
            personalized reminder email now.
          </p>
          <div className="flex flex-row space-x-4 mt-3 items-center">
            <button className="inline-flex items-center gap-2 bg-linear-to-r from-blue-700 to-blue-400 hover:from-blue-800 hover:to-blue-500 text-white py-1.5 px-5 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer">
              Send Campaign
              <span className="text-xl">&rarr;</span>
            </button>
            <button className="text-black hover:text-gray-900 font-medium py-2.5 px-4 transition-all duration-200 cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </main>
      <button className="cursor-pointer fixed bottom-5 right-5 z-50 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 flex items-center space-x-2">
        <FaRobot className="w-5 h-5" />
        <span className="font-semibold">Ask AI</span>
      </button>
    </div>
  );
};

export default Dashboard;
