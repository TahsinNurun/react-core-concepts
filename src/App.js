import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['anwar', 'jafor', 'ahmad', 'suvo']
  const products = [
    {name:'photoshop', price:'$90.00'},
    {name:'illustrator', price:'$60.99'},
    {name:'PDF reader', price:'$60.99'},
    {name:'Preimere el', price:'$249.99'}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <p>i am a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }         
        </ul>
        {
          products.map(product => <Product product = {product}></Product>)
        }
         
        <Person name = "MunnaVai" job = "football"></Person>  
        <Person></Person>  
      </header>
    </div>
  );
}
function Counter (){
  const [count, setCount] = useState(40);
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {() =>setCount(count + 1)}>Increase</button>
      <button onClick = {() =>setCount(count - 1)}>Decrease</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h1>Dynamic Users: {users.length}</h1>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle = {
    border: '2px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height:'300px',
    width:'300px',
    float:'left'
  }
  const{name,price} = props.product;
  console.log(name,price)
  return(
    <div style ={productStyle}>
      <h2>{props.product.name}</h2>
      <h1>{props.product.price}</h1>
      <button>buy now</button>
    </div>
  )
}
function Person(props){
  return(
    <div style = {{border: '4px solid gold',width: '400px',margin:'10px'}}>
      <h3>my name:{props.name}</h3>
      <p>my profession:{props.job}</p>
    </div>
  )
}

export default App;
