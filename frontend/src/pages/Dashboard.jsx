/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";
import { FaRobot } from "react-icons/fa";
import { HiArrowTrendingDown, HiArrowTrendingUp } from "react-icons/hi2";
import { FiShoppingBag, FiActivity, FiTrendingUp } from "react-icons/fi";
import { LuPackage, LuUsers } from "react-icons/lu";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { MdOutlineInventory2 } from "react-icons/md";

const Dashboard = ({ scrollToSection, scrollToTop }) => {
  const revenueData = [
    { day: "Mon", revenue: 3200 },
    { day: "Tue", revenue: 4500 },
    { day: "Wed", revenue: 3000 },
    { day: "Thu", revenue: 1500 },
    { day: "Fri", revenue: 4000 },
    { day: "Sat", revenue: 3500 },
    { day: "Sun", revenue: 4200 },
  ];

  const topProducts = [
    { name: "Premium Sneakers", sales: 234, revenue: 11234, growth: "+12%" },
    { name: "Cotton T-Shirts", sales: 189, revenue: 5670, growth: "+8.5%" },
    { name: "Denim Jeans", sales: 145, revenue: 8990, growth: "+5.2%" },
    { name: "Summer Dresses", sales: 98, revenue: 6860, growth: "-3.5%" },
  ];

  const recentActivities = [
    {
      type: "New high-value order",
      description: "Sarah M. purchased Premium Bundle - $349",
      time: "2 min ago",
    },
    {
      type: "VIP customer returned",
      description: "John D. made their 12th purchase",
      time: "15 min ago",
    },
    {
      type: "Low stock alert",
      description: "Premium Sneakers down to 8 units",
      time: "1 hour ago",
    },
    {
      type: "Conversion rate spike",
      description: "Product page views up 23%",
      time: "2 hours ago",
    },
  ];

  const inventoryItems = [
    { name: "Premium Sneakers", units: 12, status: "low" },
    { name: "Cotton T-Shirts", units: 8, status: "low" },
    { name: "Denim Jeans", units: 145, status: "good" },
    { name: "Summer Dresses", units: 67, status: "good" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar scrollToSection={scrollToSection} scrollToTop={scrollToTop} />
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
              <hr className="mt-4 mb-5 text-gray-300" />
              <p className="text-xs text-gray-600">
                Based on revenue growth, customer retention, and operational
                efficiency
              </p>
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
        <div className="mt-8 mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Revenue Trends
                </h3>
                <p className="text-gray-500 text-sm">Last 7 days</p>
              </div>
              <div className="p-2 bg-blue-100 rounded-lg">
                <FiTrendingUp className="text-blue-600 text-xl" />
              </div>
            </div>
            <div className="h-56 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid
                    strokeDasharray="0"
                    stroke="#f0f0f0"
                    horizontal={false}
                  />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                    tickFormatter={(value) => `$${value / 1000}k`}
                    domain={[0, 5000]}
                    ticks={[0, 1500, 3000, 4500]}
                  />
                  <Tooltip
                    formatter={(value) => [`$${value}`, "Revenue"]}
                    labelFormatter={(label) => `Day: ${label}`}
                    contentStyle={{
                      borderRadius: "8px",
                      border: "1px solid #e5e7eb",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#4f46e5"
                    strokeWidth={3}
                    dot={{ r: 4, fill: "#4f46e5" }}
                    activeDot={{
                      r: 6,
                      stroke: "#4f46e5",
                      strokeWidth: 2,
                      fill: "#fff",
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {revenueData.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm text-gray-900 font-medium">
                    {item.day}
                  </div>
                  <div className="text-sm text-gray-600">${item.revenue}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Recent Activity
                </h3>
                <p className="text-gray-500 text-sm">
                  What&apos;s happening now
                </p>
              </div>
              <div className="p-2 bg-purple-100 rounded-lg">
                <FiActivity className="text-purple-600 text-xl" />
              </div>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-gray-900 mb-1.5">
                        {activity.type}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {activity.description}
                      </div>
                    </div>
                    <div className="text-gray-600 text-sm whitespace-nowrap py-1 px-2 rounded-xl bg-gray-100">
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Top Products
                </h3>
                <p className="text-gray-500 text-sm">
                  Best performers this week
                </p>
              </div>
              <div className="p-2 bg-green-100 rounded-lg">
                <LuPackage className="text-green-600 text-xl" />
              </div>
            </div>
            <div className="space-y-3">
              {topProducts.map((product, index) => (
                <div
                  key={index}
                  className="cursor-pointer flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        index === 0 ? "bg-cyan-500" : "bg-gray-300"
                      }`}
                    ></div>
                    <div>
                      <div className="flex flex-row justify-start space-x-3">
                        <div className="font-medium text-gray-900">
                          {product.name}
                        </div>
                        <div>
                          {product.growth.startsWith("+") ? (
                            <div className="text-green-600 text-sm font-semibold bg-green-200 rounded-md px-1 py-0.5">
                              {product.growth} ↑
                            </div>
                          ) : (
                            <div className="text-red-600 text-sm font-semibold bg-red-200 rounded-md px-1 py-0.5"> 
                              {product.growth} ↓
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-gray-500 text-md">
                        {product.sales} sales
                      </div>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-gray-900">
                    ${product.revenue.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Inventory Status
                </h3>
                <p className="text-gray-500 text-sm">Stock levels overview</p>
              </div>
              <div className="p-2 bg-orange-100 rounded-lg">
                <MdOutlineInventory2 className="text-orange-600 text-xl" />
              </div>
            </div>
            <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-700 font-medium text-sm">
                  2 items need restocking
                </span>
              </div>
              <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                View all →
              </button>
            </div>
            <div className="space-y-3">
              {inventoryItems.map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        item.status === "low" ? "bg-red-500" : "bg-green-500"
                      }`}
                    ></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">
                        {item.name}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {item.units} units
                      </div>
                    </div>
                  </div>
                  {item.status === "low" ? (
                    <button className="cursor-pointer text-red-600 hover:text-red-700 font-medium text-sm px-3 py-1.5 border border-red-200 rounded-lg hover:bg-red-50 transition-colors whitespace-nowrap">
                      Restore
                    </button>
                  ) : (
                    <div className="text-green-600 text-sm font-medium px-2">
                      ✓ In Stock
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
              <div className="text-gray-600">
                <span className="font-medium">232</span> total units
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">2 in stock</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-600">2 low</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <button className="cursor-pointer fixed bottom-3 right-3 z-50 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 flex items-center space-x-2">
        <FaRobot className="w-5 h-5" />
        <span className="font-semibold">Ask AI</span>
      </button>
    </div>
  );
};

export default Dashboard;
