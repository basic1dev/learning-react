// import React from 'react';
// import logo from './logo.svg';
import './App.css';


import { MuiButton } from './components/MuiButton';
import { MuiTypography } from './components/MuiTympanography';
// import { MuiTextField } from './components/MuiTextField';
// import { MuiSelect } from './components/MuiSelect';
// import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiCheckbox } from './components/MuiCheckbox';

function App() {
  return (
    <div className="App">
       <MuiButton />
      <MuiTypography />
      {/* <MuiTextField /> here */}
      {/* <MuiSelect /> */}
      {/* <MuiRadioButton /> */}
      <MuiCheckbox/>
    </div>
  );
}

export default App;
