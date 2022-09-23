import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
      <h1>First Component Creation</h1>
      <Person></Person>
      <Person></Person>
    </div>
  );
}

function Person() {
  return (
    <div className='person'>
      <h1>Raihan Gazi</h1>
      <p><strong>Software Engineer</strong></p>
    </div>
  )
}

export default App;
