import { useEffect } from 'react';
import './App.css';
import Login from "./components/Login";
function App() {
  useEffect(() => {
    document.title = "Twitter"
  }, [])
  return (
    <>
      <Login />
    </>
  );
}

export default App;
