// import { Home } from '@mui/icons-material';
import { useEffect } from 'react';
import './App.css';
import Login from "./components/Login";
import MessageModal from './components/MessageModal';
import './components/MessageModal.css';
function App() {
  useEffect(() => {
    document.title = "Twitter"
  }, [])
  return (
    <>
      <Login />
      {/* <MessageModal /> */}

      {/* <Home /> */}
      
    </>
  );
}

export default App;
