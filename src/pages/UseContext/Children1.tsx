import Children2 from './Children2';

function Children1() {
  return (
    <div style={{ padding: '20px', border: '1px solid black' }}>
      <h3>Children1</h3>
      <Children2 />
    </div>
  );
}

export default Children1;
