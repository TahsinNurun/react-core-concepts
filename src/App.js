import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <p>My first react paragraph</p>
        <Person name= "Nayok rubel"></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person(props){
  const personStyle={
    border: '5px solid maroon',
    margin: '10px',
    padding: '30px'
  }
  console.log(props)
  return (
    <div style={personStyle}>
      <h1>Name:{props.name}</h1>
      <h3>hero of the year</h3>
  </div>
  )  
}

export default App;
