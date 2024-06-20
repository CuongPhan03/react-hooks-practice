import { useState } from 'react';
import CountContext from './CountContext';
import Children1 from './Children1';

import style from './UseContext.module.scss';

function UseContext() {
  const [count, setCount] = useState<number>(0);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <CountContext.Provider value={count}>
      <div className={style.useContext}>
        <Children1 />
        <button onClick={handleIncrease}>increase</button>
      </div>
    </CountContext.Provider>
  );
}

export default UseContext;
