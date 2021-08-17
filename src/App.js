import React, { useEffect, useState } from 'react';
import './styles/app.scss';
import Card from './components/Card/Card';

function App() {
  const [currencyArray, setCurrencyArray] = useState([]);

  useEffect(() => {
    generateRandomArray();
  }, []);

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

  return (
    <div className='App'>
      <header className='App-header'>Hi There!</header>
      <main>
        {console.log(currencyArray)}
        {currencyArray.map((item) => {
          return <Card name={item} key={item} />;
        })}
      </main>
    </div>
  );
}

export default App;
