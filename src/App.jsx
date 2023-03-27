import { useState, useEffect } from "react";
import CardComponent from "./components/CardComponent";

const App = () => {
  const [count, setCount] = useState(0);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          "https://random-data-api.com/api/users/random_user?size=10"
        );
        const data = await res.json();
        const newArray = Array.from(data, ({ avatar: image, first_name: fname, last_name: lname, employment }) => ({
          image,
          fname,
          lname,
          employment,
        }));
        setUsersData(newArray);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [count]);

  const handleClick = () => setCount((prevCount) => prevCount + 1);

  const genLinks = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push({ text: `Exercise ${i}`, link: `/exercise${i}` });
    }
    return arr;
  };

  const array = genLinks();

  return (
    <div className="h-screen flex flex-col items-center ">
      <div>
        {array.map((item, index) => (
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
    </div>
  );
};

export default App;