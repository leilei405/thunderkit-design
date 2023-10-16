import React from 'react';
import { ButtonUseCom } from './components/Button/ButtonUse'
import { MenuUseCom } from './components/Menu/MenuUse'
import { TabsUseCom } from './components/Tabs/TabsUse';
import { IconUseCom } from './components/Icon/IconUse';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonUseCom />
        <MenuUseCom />
        <TabsUseCom />
        <IconUseCom />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
