import logo from './logo.svg';
import './App.css';

function App() {
  const friends = ['Borhan', 'Mursalin', 'Mamun', 'Shahadat', 'Rajib', 'Rafique'];
  const profession = ['Business', 'Vadaimma', 'Android Developer'];
  return (
    < div className="App" >
      {/* {friends.map(friend => <li>{friend}</li>)} */}
      {/* <Person name="Raihan Gazi" profession="Web Developer"></Person>
      <Person name="Mamun Hossain" profession="Android Developer"></Person>
      <Person name="" profession="ios Developer"></Person> */}
      {friends.map(friend => <Person name={friend}></Person>)}
    </div >
  );
}

function Person(props) {
  const { name, profession } = props;
  return (
    <div className='container'>
      <h1>{name}</h1>
      {/* <p>Profession:{profession}</p> */}
    </div>
  )
}

export default App;
