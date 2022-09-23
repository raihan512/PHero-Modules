import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  // const products = [
  //   { name: 'Laptop', price: 29000 },
  //   { name: 'Mobile', price: 15000 },
  //   { name: 'Watch', price: 3000 },
  //   { name: 'Headphone', price: 1000 }
  // ]
  return (
    <div className="App">
      <Counter></Counter>
      {/* {products.map(product => <Product name={product.name} price={product.price}></Product>)} */}
    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(55);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

// function Product(props) {
//   return (
//     <div className='product-item'>
//       <h1>{props.name}</h1>
//       <p>{props.price}</p>
//     </div>
//   )
// }
export default App;
