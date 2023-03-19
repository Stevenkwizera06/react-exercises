import React, { useState, useEffect } from "react";
import Dice from "./Components/Dice";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

const App = () => {
  const [dice, setDice] = useState(generateNewDice);
  const [tenzies, setTenzies] = useState(false);

  function generateNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      });
    }
    return newDice;
  }

  const rollNewDice = () => {
    if (!tenzies) {
      setDice(
        dice.map((die) => {
          return die.isHeld
            ? die
            : {
                id: nanoid(),
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
              };
        })
      );
    } else {
      setDice(generateNewDice);
      setTenzies(false);
    }
  };

  const handleHold = (id) => {
    setDice(
      dice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const allSame = dice.every((die) => die.value === dice[0].value);

    if (allHeld && allSame) {
      setTenzies(true);
    }
  }, [dice]);

  const diceElement = dice.map((die) => (
    <Dice
      isHeld={die.isHeld}
      value={die.value}
      handleHold={() => handleHold(die.id)}
    />
  ));

  return (
    <div className="flex justify-center mt-24">
      {tenzies && <Confetti />}
      <h1 className="w-96 h-96 bg-primary-100 flex justify-center items-center">
        <div className="w-85 h-85 bg-secondary-100">
          <h1 className="text-center mt-10 font-bold text-xl text-gray-700">
            Tenzies
          </h1>
          <p className="text-center mt-2 font-light text-sm w-10/12 mx-auto text-gray-600">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mx-auto">
            {diceElement}
          </div>
          <div className="flex justify-center mt-3">
            <button
              className="bg-blue-400 py-2 px-7 rounded text-white font-bold"
              onClick={rollNewDice}
            >
              {tenzies ? "New Game" : "Roll"}
            </button>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default App;
