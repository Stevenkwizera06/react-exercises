const Dice = ({ isHeld, value, handleHold }) => {
  return (
    <div
      className={`py-3 px-5 mt-2 cursor-pointer font-bold ${
        isHeld ? 'bg-green-500 text-white rounded-full' : 'bg-white'
      }`}
      onClick={handleHold}
    >
      {value}
    </div>
  );
};

export default Dice;