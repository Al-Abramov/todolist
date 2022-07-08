import React from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.App}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
