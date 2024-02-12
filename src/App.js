import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Cities from "./components/Cities";
// import Ber from "./components/Weather";
// import Weather from './components/Weather';




function App() {

   //  let newDate = new Date();
   //  let currentTime = newDate.toLocaleString();
   //
   //  const current_weather = [
   //      {
   //          city: 'Петербург',
   //          temperature: 13.7,
   //          windspeed: 12.4,
   //          time: currentTime,
   //      },
   //
   //      {
   //          city: 'Екатеринбург',
   //          temperature: 19.7,
   //          windspeed: 12.4,
   //          time: currentTime,
   //      }
   // ]

  return (
      <div className="main">
              <div className="main_container">
              <Header/>
              <Navbar/>
              {/*<Ber/>*/}
              {/*<Weather*/}
              {/*    city={current_weather[0].city}*/}
              {/*    temperature={current_weather[0].temperature}*/}
              {/*    windspeed={current_weather[0].windspeed}*/}
              {/*    time={current_weather[0].time}*/}
              {/*/>*/}
                  <div>
                     <Routes>
                         <Route path="cities/*" element={<Cities/>} />
                     </Routes>
                  </div>
              </div>
          </div>
  );
}

export default App;
