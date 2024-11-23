import {useState} from "react";
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
export default function WeatherApp(){
    const[weatherinfo,setweatherinfo]=useState(
        {
        city:"kolkata",
      feelsLike: 40.97,
      humidity: 59,
     temp: 33.97,
    tempMax: 33.97,
    tempMin: 33.97,
    weather: "haze"
        }
    );
    let updateinfo = (newinfo)=>{
        setweatherinfo(newinfo);
    };

    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather app </h1>
            <SearchBox updateinfo={updateinfo} />
            <InfoBox info={weatherinfo}/>
            </div>
    )
}