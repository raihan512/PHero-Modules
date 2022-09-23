import { useState } from 'react';
import './App.css';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="App">
      <Sum></Sum>
      <h1>Showing users details from JsonPlaceholder API</h1>
      <Users></Users>
    </div>
  );
}

function Sum() {
  const [count, setCount] = useState(5);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increase}>Add</button>
      <button onClick={count === 1 ? '' : decrease}>Reduce</button>
    </div >
  )
}

export default App;
