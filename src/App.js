
import './App.css';
import Fotter from './Components/Fotter';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Fotter />

    </div>
  );
}

export default App;
