import logo from './logo.svg';
import './App.css';
import Data from './Components/Data';
import React from 'react';
function App() {
 
 const[quotes,setQuotes]=React.useState(Data[0])
 function changeQuote(){
    const number = Math.floor(Math.random() * Data.length);
  setQuotes(Data[number])

 }
  return (

    <div className="App">
      <p>{quotes.quote}</p>
      <p>{quotes.author}</p>
      
      <button onClick={changeQuote}>Generate Random Quote</button>
    </div>
  );
}

export default App;
