import { memo } from 'react';

import style from './Children.module.scss';

interface Props {
  handleIncrease: () => void;
}

function Children(props: Props) {
  console.log('rerender');

  return (
    <div className={style.children}>
      <h3>Children</h3>
      Not rerender <br />
      <button className={style.incBtn} onClick={() => props.handleIncrease()}>
        increase1
      </button>
    </div>
  );
}

export default memo(Children);
