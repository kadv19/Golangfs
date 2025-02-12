// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
// import Greetings from './greetings';
import NavBar from './header/navbar';
import CarsCreate from './cars/CarsCreate';
import CarsList from './cars/CarsList';
import CarsView from './cars/CarsView';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <CarsCreate />
      <CarsList />
      <CarsView />
    </>
  );
}

export default App;
