import './App.css';

import Header from "./Components/Header/Header";
import Footer from './Components/Footer/Footer';
import Person from './Components/Person/Person';
import Countries from './Components/Countries/Countris';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Person></Person>
      <Footer></Footer>
    </div>
  );
}

/* 

function Country(props) {
  return (
    <div style={{ border: '1px solid red', margin: '20px' }}>
      <h3>{props.name}</h3>
      <h5>{props.population}</h5>
    </div>
  )
} */

export default App;
