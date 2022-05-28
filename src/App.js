import './App.css';
import Home from './components/Home';
import Login from "./components/Login";
function App() {
  return (
    <>
      {
        false ? (
          <Login />
        ) : (
          <Home />
        )
      }
    </>
  );
}

export default App;
