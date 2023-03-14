import React from "react";

const Home = () => {
  return (
    <div className="text-center h-screen">
      <h1 className="text-7xl font-bold">React coding exercices</h1>
      <ul className="flex items-center justify-center h-full">
        <li>
          <button className="border border-black px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            <a className="text-4xl" href="/stateprops">
              State and props{" "}
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Home;
