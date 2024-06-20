import { useState, useMemo } from 'react';

import style from './UseMemo.module.scss';

function UseMemo() {
  const [name, setName] = useState<string>('');
  const [allName, setAllName] = useState<string[]>([]);

  const numRow = useMemo(() => {
    console.log('re calculate');

    return allName.length;
  }, [allName]);

  return (
    <div className={style.useMemo}>
      <h2>Re calculate num row when submit</h2>

      <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />

      <button
        className={style.submitBtn}
        onClick={() => {
          setAllName((prev) => [...prev, name]);
          setName('');
        }}
      >
        submit
      </button>

      <p>Num row: {numRow}</p>

      <ul>
        {allName.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseMemo;
