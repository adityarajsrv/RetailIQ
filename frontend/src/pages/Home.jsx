import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Link to="/dashboard">
        <button className="p-4 border-black border rounded-xl m-5 cursor-pointer bg-red-200">
          Dashboard
        </button>
      </Link>
    </div>
  );
};

export default Home;
