import React, { useEffect, useState } from 'react';
import './styles/app.scss';
import Card from './components/Card/Card';

function App() {
  const [currencyArray, setCurrencyArray] = useState([]);
  const [userChoice, setUserChoice] = useState([]);

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

  useEffect(() => {
    generateRandomArray();
  }, []);

  function generateRandomArray() {
    const randomArray = [];
    for (let i = 0; i < 5; i++) {
      let index = Math.floor(Math.random() * 10);
      randomArray.push(dataBase[index]);
    }
    setCurrencyArray(randomArray);
  }

  function click(e) {
    setUserChoice((prevArr) => [...prevArr, e.target.id]);
  }

  return (
    <div className='App'>
      <header className='App-header'>Hi There!</header>
      <main>
        {console.log(currencyArray)}
        <Card test={'Shit'} onClick={click} />
      </main>
    </div>
  );
}

export default App;
