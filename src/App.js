import React from 'react';
import './App.css';
import { UserForm } from './components/UserForm';
import store from './store.js'



function App() {
  return (
    <div className="App">
      <UserForm store = {store}/>
    </div>
  );
}

export default App;
