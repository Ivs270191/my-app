import { useContext } from 'react';
import './App.css';
import { Layout } from './layout/layout';
import { Result } from './layout/result';
import { States } from "./store/myContextStore";

function App() {

  return <div className="App">
    <header className="App-header">
      <Layout />
    </header>
  </div>
}

export default App;
