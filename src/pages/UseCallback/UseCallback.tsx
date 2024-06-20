import { useCallback, useState } from 'react';
import Children from './Children';

function UseCallback() {
  const [count, setCount] = useState<number>(0);

  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>count: {count}</h2>
      <Children handleIncrease={handleIncrease} />
    </div>
  );
}

export default UseCallback;
