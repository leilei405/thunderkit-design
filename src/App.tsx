import React from 'react';
import { ButtonUseCom } from './components/Button/ButtonUse'
// import { MenuUseCom } from './components/Menu/MenuUse'
// import { TabsUseCom } from './components/Tabs/TabsUse';
// import { IconUseCom } from './components/Icon/IconUse';
import { AlertUseCom } from './components/Alert/AlertUse';
import { InputUseCom } from './components/Input/InputUse';
import { AutoCompleteUseCom } from './components/AutoComplete/autoCompleteUse';
import { SelectUseCom } from './components/Select/selectUseCom';
import { UploadUseCom } from './components/Upload/uploadUse';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonUseCom />
        {/* <MenuUseCom /> */}
        {/* <TabsUseCom /> */}
        {/* <IconUseCom /> */}
        <AlertUseCom />
        <InputUseCom />
        <AutoCompleteUseCom />
        <SelectUseCom />
        <UploadUseCom />
      </header>
      
    </div>
  );
}

export default App;
