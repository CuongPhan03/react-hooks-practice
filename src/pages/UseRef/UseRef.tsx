import { useState, useRef } from 'react';

import style from './UseRef.module.scss';

function UseRef() {
  const ref = useRef(null);

  const handleClick = () => {
    if (ref && ref.current) {
      ref.current.innerText = Math.random();
    }
  };

  return (
    <div className={style.useRef}>
      <h2 ref={ref}>useRef</h2>
      <button onClick={handleClick}>Change text</button>
    </div>
  );
}

export default UseRef;
