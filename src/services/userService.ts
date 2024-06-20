const checkUser = (username: string, password: string) => {
  if (username === 'admin' && password === '123456') {
    return {
      message: 'login successfully !',
      code: 0,
      data: '',
    };
  } else
    return {
      message: 'wrong username or password !',
      code: 1,
      data: '',
    };
};

const login = (username: string, password: string) => {
  if (username === 'admin' && password === '123456') {
    return {
      message: 'login successfully !',
      code: 0,
      data: '',
    };
  } else
    return {
      message: 'wrong username or password !',
      code: 1,
      data: '',
    };
};

const logout = () => {
  return {
    message: 'logout successfully !',
    code: 0,
    data: '',
  };
};

export { checkUser, login, logout };
