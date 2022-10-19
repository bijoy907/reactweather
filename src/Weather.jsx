import React, { useEffect, useState } from "react";
import weatherTrim from "./bgVideo/weatherTrim.mp4"

const Weather = () => {
    const [city, setcity] = useState(null);
    const [search, setsearch] = useState("kolkata");
 
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1189c4aa0a7cfef0110cd5e5a52760a9`
            const res = await fetch(url);
            const resjson = await res.json();
            // console.log(resjson)
            setcity(resjson.main);
        };
        fetchApi();
    },[search]);

    // *******************
// useEffect(() => {
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1189c4aa0a7cfef0110cd5e5a52760a9`)
//     .then((res) => {
//     setcity(resjson.main);
//     console.log(res)
//     })
//     .catch((error) => {
//     console.log(error);
//     })
//     },[search])
// ********************************************
    const findcity=(event)=>{
        setsearch(event.target.value);
    }

    return (
        <>
        <div className="main">
        <video src={weatherTrim} autoPlay loop muted/>
            <div className="parentDiv">
            <div className="childDiv">
                <div className="header"><h1>Current weather</h1></div>
                <input type="search" placeholder="Search Location..." value={search} onChange={findcity} className="searchbar"/>
                {
                    !city ? (
                        <p className="error">No Data Found ❗ &#x1F62D;</p>
                    ) : (
                        <>
                            <h2 className="city">🧭 {search}</h2>
                            <div className="info">
                                <h3 className="temp">{city.temp} °C</h3>
                                <h4 className="minMax">Min <span className="spanoutput">{city.temp_min}</span> °C || Max <span className="spanoutput">{city.temp_max}</span> °C</h4>
                            </div>
                                <h3 className="tempi">Humidity: <span className="spanoutput">{city.humidity} </span>%</h3>
                                <h3 className="tempi">Feel like: <span className="spanoutput">{city.feels_like}</span> °C</h3>
                        </>
                    )}
                    </div>
            </div>
            </div>
        </>
    )
}

export default Weather;