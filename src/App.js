import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Login from "./components/Login";
function App() {
  const [isloggedin, setIsloggedin] = useState(true);

  return (
    <>
      {
        isloggedin ? (
          <Login setIsloggedin={setIsloggedin}/>
        ) : (
          <Home />
        )
      }
    </>
  );
}

export default App;
