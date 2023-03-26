import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Cities from "./components/Cities";
// import Button from "./components/Button";


function App() {
  return (
      <Router>
      <div className="main">
              <div className="main_container">
                  <Header/>
                  <Navbar/>
                  {/*<Button/>*/}
                  <div>
                      <Routes>
                          <Route path="/" element={<App/>} />
                          <Route path="/peterburg" element={<Cities/>} />
                      </Routes>
                  </div>
              </div>
          </div>
        </Router>

  );
}

export default App;
