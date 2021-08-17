import React, { useState } from 'react';
import './styles/app.scss';
import Card from './components/Card/Card';

function App() {
  const [userChoice, setUserChoice] = useState([]);

  const currencyArray = [
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

  // function click(e) {
  //   console.log(e.target);
  // }

  // function generateRandomArr() {
  //   const array = Array.from({ length: 5 }, () =>
  //     Math.floor(Math.random() * 6)
  //   );
  //   return array;
  // }

  // function generateRandomCards() {
  //   let array = generateRandomArr();
  //   console.log(array);
  //   for (const number of array) {
  //     console.log(number);
  //   }
  // }

  function generateRandomArray() {
    const randomArray = [];
    for (let i = 0; i < 5; i++) {
      let index = Math.floor(Math.random() * 10);
      randomArray.push(currencyArray[index]);
    }
    console.log(randomArray);
  }

  function click(e) {
    console.log(e.target.id);
    setUserChoice((prevArr) => [...prevArr, e.target.id]);
    console.log(userChoice);
  }

  return (
    <div className='App'>
      <header className='App-header'>Hi There!</header>
      <main>
        {generateRandomArray()}
        <Card test={'Shit'} onClick={click} />
      </main>
    </div>
  );
}

export default App;
