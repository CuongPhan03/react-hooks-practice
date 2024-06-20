import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import Memo from './pages/Memo/Memo';
import UseMemo from './pages/UseMemo/UseMemo';
import UseCallback from './pages/UseCallback/UseCallback';
import UseContext from './pages/UseContext/UseContext';
import UseRef from './pages/UseRef/UseRef';
import Data from './pages/Data/Data';
import Login from './pages/Login/Login';
import './App.scss';

function App() {
  const routes = [
    { path: '/', component: Home },
    { path: '/data', component: Data },
    { path: '/memo', component: Memo },
    { path: '/usememo', component: UseMemo },
    { path: '/usecallback', component: UseCallback },
    { path: '/usecontext', component: UseContext },
    { path: '/useref', component: UseRef },
  ];
  return (
    <Router>
      <div className="app">
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <route.component />
                </Layout>
              }
            />
          ))}
          <Route path="/login" element={<Login />} />;
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
