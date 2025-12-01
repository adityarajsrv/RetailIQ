import Navbar from "../components/Navbar";
import { FaRobot } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="ml-20 w-[90%] mt-10">
        <div className="border border-black">
          <div className="flex flex-row justify-start space-x-5">
            <h2 className="text-xl font-bold">
              Recover $1,245 by engaging cart abandoners
            </h2>
            <p>High Impact</p>
          </div>
          <p>
            23 customers abandoned their carts in the last 48 hours. Send them a
            personalized reminder email now.
          </p>
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
