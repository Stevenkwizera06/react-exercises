import CardComponent  from "./components/CardComponent ";
import data from "./data";

const App = () => {
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
      <div className="w-[40rem] p-5 h-72 mt-20 bg-[#dff8db] flex gap-5 items-center rounded-md">
        {data.map((item) => (
          <CardComponent  key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default App;
