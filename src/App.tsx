import React from 'react';
import { ButtonUseCom } from './components/Button/ButtonUse'
import { MenuUseCom } from './components/Menu/MenuUse'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonUseCom />
        <MenuUseCom />
      </header>
    </div>
  );
}

export default App;
