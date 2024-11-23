import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import {useState} from "react";

export default function SearchBox({updateinfo}){
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "a229a7e6ccdfef9a49132a730a795d9d";

    let getWeatherinfo = async()=>{
        try{
       let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonRes = await response.json();
       console.log(jsonRes);
       let result ={
        city:city,
        temp :jsonRes.main.temp,
        tempMin:jsonRes.main.temp_min,
        tempMax:jsonRes.main.temp_max,
        humidity:jsonRes.main.humidity,
        feelsLike:jsonRes.main.feels_like,
        weather:jsonRes.weather[0].description,
       };
       console.log(result);
       return result;
    }catch(err){
        throw err;
    }
   
    }
    let [city,setcity]=useState("");
    let[error,setError]=useState(false);

    let handleChange = (event)=>{
            setcity(event.target.value);
    
    };
    let handleSubmit = async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setcity("");
            let newinfo = await getWeatherinfo();
            updateinfo(newinfo);
        }catch(err){
            setError(true);
        }
    }
    
    return(
    <div className="SearchBox">
        <h1> Find your City Weather </h1>
        <form onSubmit = {handleSubmit}>
        <TextField id="standard-basic" label="city name" variant="standard" required
        value={city} onChange={handleChange}/>
        <br/><br/> <br/><br/>
        <Button variant="contained" type="submit">Search</Button>
        {error &&<p> no such place</p>}
        </form>
    </div>
    )
}