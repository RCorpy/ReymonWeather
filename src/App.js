import React, {useState} from 'react';

const api = {
  key: "3cd6710bc40797a3dbd07e939ceacf1e",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = ev => {
    if(ev.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res=>res.json())
        .then(result=>{
          setWeather(result)
          setQuery("")
          console.log(result)
        })

    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={`app ${(typeof weather.weather != "undefined") ? weather.weather[0].main : ""}`}>
       <main>
         <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="search..."
            onChange={e => setQuery(e.target.value)}
            value = {query}
            onKeyPress={search}
            
            /> 
         </div>
         {(typeof weather.name!="undefined") ? (
         <div>
          <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder( new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}ºC
            </div>
            <div className="weather">
              {weather.weather[0].main}
            </div>
          </div>
         </div>) : (
         <div className="weather-box">
            <div className="temp">
              Welcome
            </div>
            <div className="weather">
              Type a city to search
            </div>
          </div>)}
       </main>
    </div>
  );
}

export default App;
