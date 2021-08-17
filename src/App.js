import React, { useState } from 'react';
import './styles/app.scss';
import Card from './components/Card/Card';

function App() {
  const [userChoice, setUserChoice] = useState([]);
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

  function click(e) {
    console.log(e.target.id);
    setUserChoice((prevArr) => [...prevArr, e.target.id]);
    console.log(userChoice);
  }

  return (
    <div className='App'>
      <header className='App-header'>Hi There!</header>
      <main>
        <Card test={'Shit'} onClick={click} />
      </main>
    </div>
  );
}

export default App;
