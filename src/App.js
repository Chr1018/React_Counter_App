import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [result, setResult] = useState(0);

  const increment = () => {
    setResult(result + 1);
  };

  const decrement = () => {
    setResult(result - 1);
  };

  return (
    <>
      <div className="mainDiv">
        {result}
        {/* <div className="result">{result}</div> */}
        {/* <div className="container"> */}
        {/* <div className="plus" onClick={increment}> */}
        <i className="fa fa-plus" aria-hidden="true" onClick={increment}></i>
        {/* </div> */}
        {/* <div className="minus" onClick={decrement}> */}
        <i className="fa fa-minus" aria-hidden="true" onClick={decrement}></i>
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
}
