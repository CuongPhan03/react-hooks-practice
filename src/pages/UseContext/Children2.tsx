import { useContext } from 'react';
import CountContext from './CountContext';

function Children2() {
  const count = useContext(CountContext);
  return (
    <div style={{ padding: '10px', margin: '10px 0', border: '1px solid black' }}>
      <h3>Children2</h3> count {count}
    </div>
  );
}

export default Children2;
