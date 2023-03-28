import { useState, useEffect } from "react";
import CardComponent from "./components/CardComponent";

const App = () => {
  const [count, setCount] = useState(0);
  const [usersData, setUsersData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          "https://random-data-api.com/api/users/random_user?size=10"
        );
        const data = await res.json();
        const newArray = Array.from(data, ({ avatar: image, first_name: firstName, last_name: lastName, employment }) => ({
          image,
          firstName,
          lastName,
          employment,
        }));
        setUsersData(newArray);
      } catch (error) {
        setError(error.message);
      }
    }
    getData();
  }, [count]);

  const handleClick = () => setCount((prevCount) => prevCount + 1);

  const generateLinks = () => {
    let exerciseArray = [];
    for (let exerciseIndex = 0; exerciseIndex < 10; exerciseIndex++) {
      exerciseArray.push({ text: `Exercise ${exerciseIndex}`, link: `/exercise${exerciseIndex}` });
    }
    return exerciseArray;
  };

  const linksArray = generateLinks();

  return (
    <div className="h-screen flex flex-col items-center ">
      <div>
        {linksArray.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={`px-2 underline underline-offset-4 ${
              !index === 0 && "border-indigo-600 border-l"
            } text-indigo-600 `}
          >
            {index === 0 ? "Home" : item.text}
          </a>
        ))}
      </div>
      <div>
        <button className="py-2 px-4 bg-red-600 shadow-lg text-white rounded text-lg uppercase font-semibold duration-100 mt-20" onClick={handleClick}>
          Fetch Random
        </button>
      </div>
      <div className="w-[60rem] p-5 mt-20 bg-[#dff8db] grid grid-cols-2 justify-items-center gap-5 items-center rounded-md">
        {usersData.map(({ id, ...rest }) => (
          <CardComponent key={id} {...rest} />
        ))}
      </div>
      {error && <p>There was an error: {error}</p>}
    </div>
  );
};

export default App;
