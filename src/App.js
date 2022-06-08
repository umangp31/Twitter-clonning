import { Home } from '@mui/icons-material';
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
      {/* <Home /> */}
      
    </>
  );
}

export default App;
