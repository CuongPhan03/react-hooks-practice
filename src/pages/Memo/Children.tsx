import { memo } from 'react';

interface Props {
  count: number;
}

function Children(props: Props) {
  console.log('rerender');
  return (
    <div style={{ border: '1px solid black', padding: '10px 20px', marginTop: '10px' }}>
      <h3>Children</h3>
      Rerender when count1 changed
      <p>{props.count}</p>
    </div>
  );
}

export default memo(Children);
