import { useState } from 'react';
import Children from './Children';
import style from './Memo.module.scss';

function Memo() {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  return (
    <div className={style.memo}>
      <button className={style.incBtn} onClick={() => setCount1(count1 + 1)}>
        increase1
      </button>
      <button className={style.incBtn} onClick={() => setCount2(count2 + 1)}>
        increase2
      </button>
      <h2>count1: {count1}</h2>
      <h2>count2: {count2}</h2>
      <Children count={count1} />
    </div>
  );
}

export default Memo;
