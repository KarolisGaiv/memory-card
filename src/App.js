import React, { useEffect, useState } from 'react';
import './styles/app.scss';
import Card from './components/Card/Card';

function App() {
  const [currencyArray, setCurrencyArray] = useState([]);
  const [userPicks, setUserPicks] = useState([]);
  const [recordCounter, setRecordCounter] = useState(0);

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
  ];

  function generateRandomArray() {
    const randomArray = [];
    for (let i = 0; i < 5; i++) {
      let index = Math.floor(Math.random() * 10);
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
      setRecordCounter(0);
      setUserPicks([]);
    } else {
      setRecordCounter(recordCounter + 1);
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>Hi There!</header>
      <main className='content'>
        {currencyArray.map((item, index) => {
          return <Card name={item} key={index} handleClick={handleClick} />;
        })}
        {console.log(userPicks)}
      </main>
      <div className='counter'>{recordCounter}</div>
    </div>
  );
}

export default App;
