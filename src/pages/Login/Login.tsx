import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { login } from '../../services/userService';
import { Input, message } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

import style from './Login.module.scss';

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const defaultIsValid = { username: true, password: true };
  const [isValid, setIsValid] = useState(defaultIsValid);

  const handleLogin = () => {
    setIsValid(defaultIsValid);
    if (!username) {
      setIsValid({ ...isValid, username: false });
      message.error('Username and password are required !');
      return;
    }
    if (!password) {
      setIsValid({ ...isValid, password: false });
      message.error('Username and password are required !');
      return;
    }
    const res = login(username.trim(), password);
    if (res) {
      if (+res.code === 0) {
        const loginValue = { username: username.trim(), password: password };
        sessionStorage.setItem('loginValue', JSON.stringify(loginValue));
        navigate('/');
      } else {
        setIsValid({ username: false, password: false });
        message.error(res.message);
        setUsername('');
        setPassword('');
      }
    }
  };

  useEffect(() => {
    const checkUser = () => {
      const session = sessionStorage.getItem('loginValue');
      if (session) {
        const loginValue = JSON.parse(session);
        if (loginValue.username && loginValue.password) {
          const res = login(loginValue.username, loginValue.password);
          if (res && +res.code === 0) {
            navigate('/');
            return;
          }
        }
        sessionStorage.removeItem('loginValue');
      }
    };
    checkUser();
  }, []);

  return (
    <div className={style.login}>
      <div className={style.band1}>
        <h2>Welcome !</h2>
        <h1>My React App</h1>
        <NavLink to="/login" className={style.link}>
          <div className={style.button}>
            <p className="fw-bolder mb-1 ps-3">Đăng ký </p> &nbsp;
            <ArrowRightOutlined />
          </div>
        </NavLink>
      </div>
      <div className={style.band2}>
        <div className={style.content}>
          <h2>Đăng nhập</h2>
          <div className={style.input}>
            username: admin
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setIsValid(defaultIsValid);
              }}
            />
          </div>
          <div className={style.input}>
            password: 123456
            <Input.Password
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setIsValid(defaultIsValid);
              }}
              onPressEnter={(e) => handleLogin()}
            />
          </div>
          <button
            className="btn btn-success w-100 fw-bolder py-2 mt-3"
            onClick={() => {
              handleLogin();
            }}
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
