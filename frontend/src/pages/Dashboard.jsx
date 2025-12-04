import Navbar from "../components/Navbar";
import { FaRobot } from "react-icons/fa";
import { HiArrowTrendingDown, HiArrowTrendingUp } from "react-icons/hi2";
import { FiShoppingBag } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="ml-20 w-[90%] mt-10">
        <div className="py-5 px-4 bg-linear-to-r from-blue-100 to-blue-50 rounded-2xl shadow-md">
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
        <div className="py-5 mt-5 flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/3">
            <div className="border border-black/10 rounded-lg h-70 bg-white shadow-md hover:shadow-lg cursor-pointer p-5">
              <div className="flex flex-row justify-between items-center mb-5">
                <h2 className="text-xl font-semibold">Growth Score</h2>
                <HiArrowTrendingUp className="text-green-400 mr-1 text-2xl" />
              </div>
              <p className="text-2xl text-gray-600">
                <span className="text-5xl text-cyan-500 font-semibold">78</span>{" "}
                /100
              </p>
              <div className="h-3 w-full flex rounded-md overflow-hidden mt-4 mb-4">
                <div className="h-full w-3/4 bg-cyan-500"></div>
                <div className="h-full w-1/4 bg-green-400"></div>
              </div>
              <div className="flex flex-row justify-between items-center text-sm text-gray-700 mb-1">
                <p>vs. last month</p>
                <p className="text-green-400 font-semibold">+8 points</p>
              </div>
              <div className="flex flex-row justify-between items-center text-sm text-gray-700">
                <p>Industry avg.</p>
                <p className="font-semibold text-gray-600">65/100</p>
              </div>
              <hr className="mt-4 mb-5 text-gray-300"/>
              <p className="text-xs text-gray-600">Based on revenue growth, customer retention, and operational efficiency</p>
            </div>
          </div>
          <div className="lg:w-2/3">
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-black/10 rounded-lg bg-white shadow-md hover:shadow-lg cursor-pointer p-5">
                <div className="flex flex-row justify-between">
                  <div className="text-purple-700 text-xl mb-2 px-3 py-1 bg-purple-200 rounded-lg">
                    $
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <HiArrowTrendingUp className="text-green-400 mr-1" />
                    <div className="text-green-400 font-bold text-sm">
                      12.3%
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-gray-600 text-sm mb-1">Revenue</div>
                    <div className="text-2xl font-bold">$24,532</div>
                  </div>
                </div>
              </div>
              <div className="border border-black/10 rounded-lg bg-white shadow-md hover:shadow-lg cursor-pointer p-5">
                <div className="flex flex-row justify-between">
                  <div className="bg-green-100 rounded-lg p-2 inline-block mb-2">
                    <FiShoppingBag className="text-green-600 text-xl" />
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <HiArrowTrendingUp className="text-green-400 mr-1" />
                    <div className="text-green-400 font-bold text-sm">8.7%</div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-gray-600 text-sm mb-1">Orders</div>
                    <div className="text-2xl font-bold">342</div>
                  </div>
                </div>
              </div>
              <div className="border border-black/10 rounded-lg bg-white shadow-md hover:shadow-lg cursor-pointer p-5">
                <div className="flex flex-row justify-between">
                  <div className="bg-blue-100 rounded-lg p-2 inline-block mb-2">
                    <HiArrowTrendingUp className="text-blue-400 text-xl" />
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <HiArrowTrendingUp className="text-green-400 mr-1" />
                    <div className="text-green-400 font-bold text-sm">2.1%</div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-gray-600 text-sm mb-1">
                      Conversion Rate
                    </div>
                    <div className="text-2xl font-bold">3.8%</div>
                  </div>
                </div>
              </div>
              <div className="border border-black/10 rounded-lg bg-white shadow-md hover:shadow-lg cursor-pointer p-5">
                <div className="flex flex-row justify-between">
                  <div className="bg-gray-100 rounded-lg p-2 inline-block mb-2">
                    <LuUsers className="text-gray-600 text-xl" />
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <HiArrowTrendingDown className="text-red-500 mr-1" />
                    <div className="text-red-500 font-bold text-sm">1.2%</div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-gray-600 text-sm mb-1">
                      Returning Customers
                    </div>
                    <div className="text-2xl font-bold">24%</div>
                  </div>
                </div>
              </div>
            </div>
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
