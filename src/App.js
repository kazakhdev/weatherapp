import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

const api = {
  key: "c9249fbfaeeecd3b25c8ffabd91ccc65",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const cities = ["Select a City", "Kiev", "Nur-Sultan", "New York"];
  {
  }

  const [selectedCity, setSelectedCity] = useState(cities[1]);
  const [weather,setWeather] = useState({})

  useEffect(()=>{
    console.log("started useeffect");
    callingApi()
    console.log("I've been called")
  },[selectedCity])


  const callingApi =async()=>{
      let data = await axios.get(`${api.base}weather?q=${selectedCity}&units=metric&APPID=${api.key}`)
     setWeather(data.data)
      
  }

  return (
    
    <div className="container warm">
      <div className=" app warm">
        <main>
          <div className="top">
            <div className="location">
              {selectedCity}
              {console.log("i've been printed")}
            </div>
          </div>

    <div>         
        <div className="temp">
          <h2>{weather.main? Math.round(weather.main.temp)+ "℃":"0"}</h2>
        </div>
    </div>  

    <div>
        <div className="situation">
          <h3>{weather.weather? weather.weather[0].main: ""}</h3>
        </div>
    </div>

    <div className="select-area">   
      <select className="custom-select" onChange={(e)=>setSelectedCity(e.target.value)}>
              {/* we need to map our cities in order to show the options */}
              {
                cities.map((city)=>{
                  return(<option key ={city} value={city}>{city}</option>)
                })
              }
            
      </select>
      <br />
    </div>


        </main>
      </div>
    </div>
  
  );
}

export default App;