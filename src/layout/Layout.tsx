import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import { checkUser } from '../services/userService';

import style from './Layout.module.scss';

interface Props {
  children: JSX.Element;
}

function Layout(props: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    const check = async () => {
      const session = sessionStorage.getItem('loginValue');
      if (session) {
        const loginValue = JSON.parse(session);
        if (loginValue.username && loginValue.password) {
          const res = checkUser(loginValue.username, loginValue.password);
          if (res) {
            return;
          }
        }
        sessionStorage.removeItem('loginValue');
      }
      navigate('/login');
    };
    check();
  }, []);

  return (
    <div className={style.layout}>
      <Header />
      <div className={style.content}>{props.children}</div>
    </div>
  );
}

export default Layout;
