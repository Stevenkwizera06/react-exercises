import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className=" h-screen ">
      <h1 className="text-7xl font-bold text-center">React coding exercises</h1>
      <ul className=" text-center flex items-center justify-center h-full">
        <li>
          <button className="border border-black px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            <Link className="text-4xl" to="/stateprops">
              User click exercise
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Home;
