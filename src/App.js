import React, { useEffect, useState } from 'react';
import './styles/app.scss';
import Card from './components/Card/Card';

function App() {
  const [currencyArray, setCurrencyArray] = useState([]);
  const [userPicks, setUserPicks] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    generateRandomArray();
  }, [userPicks]);

  const dataBase = [
    'Maven Orb',
    'Awakener Orb',
    'Exalted Orb',
    'Tailoring Orb',
    'Chaos Orb',
    'Divine Orb',
    'Ancient Orb',
    'Regal Orb',
    'Vaal Orb',
    'Chromatic Orb',
    'Orb of Annulment',
    'Glassblower Bauble',
    'Cartographer Chisel',
    'Orb of Alchemy',
    'Orb of Binding',
    'Orb of Chance',
    'Orb of Transmutation',
  ];

  function generateRandomArray() {
    const randomArray = [];
    for (let i = 0; i < 9; i++) {
      let index = Math.floor(Math.random() * dataBase.length);
      randomArray.push(dataBase[index]);
    }
    return setCurrencyArray(randomArray);
  }

  function handleClick(e) {
    const targetCard = e.target.innerText;
    setUserPicks((prevPicks) => [...prevPicks, targetCard]);
    calculateResult(userPicks, targetCard);
  }

  function calculateResult(previousTurns, currentTurn) {
    if (previousTurns.includes(currentTurn)) {
      setCurrentScore(0);
      setUserPicks([]);
    } else {
      setCurrentScore(currentScore + 1);
    }

    bestScore < currentScore ? setBestScore(currentScore) : null;
  }

  return (
    <div className='App'>
      <header className='App-header'>Hi There!</header>
      <main className='content'>
        <div className='card-wrapper'>
          {currencyArray.map((item, index) => {
            return <Card name={item} key={index} handleClick={handleClick} />;
          })}
          {console.log(userPicks)}
        </div>
      </main>
      <div className='counter'>{currentScore}</div>
      <div className='counter'>{bestScore}</div>
    </div>
  );
}

export default App;
