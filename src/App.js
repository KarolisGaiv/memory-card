import React, { useEffect, useState } from 'react';
import './styles/app.scss';
import Card from './components/Card/Card';

function App() {
  const [currencyArray, setCurrencyArray] = useState([]);
  const [userPicks, setUserPicks] = useState([]);

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
    setCurrencyArray(randomArray);
  }

  function handleClick(e) {
    console.log(userPicks);
    const targetCard = e.target.innerText;
    console.log(targetCard);
    setUserPicks((prevPicks) => [...prevPicks, targetCard]);
    console.log(userPicks);
  }

  return (
    <div className='App'>
      <header className='App-header'>Hi There!</header>
      <main className='content'>
        {currencyArray.map((item, index) => {
          return <Card name={item} key={index} handleClick={handleClick} />;
        })}
      </main>
    </div>
  );
}

export default App;
