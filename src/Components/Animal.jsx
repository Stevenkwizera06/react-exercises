import React from "react";

const Animal = ({ name }) => {
  return (
    <div className="px-4 py-2 border border-gray-400 text-center w-32">
      {name}
    </div>
  );
};

export default Animal;
