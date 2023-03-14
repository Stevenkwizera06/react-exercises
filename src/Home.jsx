import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen text-center">
      <h1 className="text-7xl font-bold">React coding exercices</h1>
      <ul className="h-full flex items-center justify-center">
        
        <li>
          <button className="border border-black px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            <Link className="text-4xl" to="/customlist">
              Rendering custom Component
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Home;
