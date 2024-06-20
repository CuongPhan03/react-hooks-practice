import { NavLink, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { logout } from '../../services/userService';

import style from './Header.module.scss';
import { LogoutOutlined } from '@ant-design/icons';

function Header() {
  const routes = [
    { path: '/', title: 'Home' },
    { path: '/memo', title: 'Memo' },
    { path: '/usememo', title: 'UseMemo' },
    { path: '/usecallback', title: 'UseCallback' },
    { path: '/usecontext', title: 'UseContext' },
    { path: '/useref', title: 'UseRef' },
    { path: '/data', title: 'Data' },
  ];

  const navigate = useNavigate();
  const handleLogout = async () => {
    const res = logout();
    if (res) {
      if (+res.code === 0) {
        sessionStorage.removeItem('loginValue');
        navigate('/login');
      } else {
        message.error(res.message);
      }
    }
  };

  return (
    <div className={style.header}>
      {routes.map((route, index) => (
        <NavLink to={route.path} key={index} className={(nav) => style.link + ' ' + (nav.isActive ? style.active : '')}>
          {route.title}
        </NavLink>
      ))}
      <button className={style.logoutBtn} onClick={handleLogout}>
        Logout &nbsp;
        <LogoutOutlined />
      </button>
    </div>
  );
}

export default Header;
