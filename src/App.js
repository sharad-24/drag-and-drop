import './App.css';
import './main.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from './container/Main';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
