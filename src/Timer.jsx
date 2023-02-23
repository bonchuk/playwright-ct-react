import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import styles from './timer.module.css';
import React from 'react';


function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return (
    <div className= {styles.container}>
      <h1 className={styles.title}>I have rendered {count} times!</h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);

export default Timer;