import React from 'react'
import {useState} from 'react'
import { FaCity,FaTemperatureHigh,FaTemperatureLow, } from 'react-icons/fa';
import {TbTemperature} from 'react-icons/tb'
import {WiHumidity} from 'react-icons/wi'
import {GrMapLocation} from 'react-icons/gr'



import './Home.css'

const Home = () => {
    const[city,setCity]=useState()
    const [data,setData]=useState([])
    const key = "52c5a1a41b4740aa8b25d8f8f68e7c4b";
  
    
    const api = async function(){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
        const apidata = await fetch(url)
        const response = await apidata.json()
       console.log(response)
       setData({
           data:response,
           city:response.name,
           country:response.sys.country,
           temp:response.main.temp,
           min_temp:response.main.temp_min,
           max_temp:response.main.temp_max,
           pressure:response.main.pressure,
           humidity:response.main.humidity,
           weather:response.weather[0].main,
           description:response.weather[0].description,

                

    })
    
    console.log("data",response.sys.country)
       
       
        


    }

    
   
   
   
    
  return (
    <div>
        <div className="main-card">
            <div className="weather-card">
                <h2>Enter the city name to get wether details</h2>
                <div className="search-box">
                    <input 
                    type="text"
                    placeholder='City-Name'
                    onChange={(e)=>setCity(e.target.value)}
                     />
                     <button className='btn-primary' onClick={()=>{
                          api()
                     }}>GO</button>
                </div>
                <div className="output-box">
                    <h1>Weather Report</h1>

                    <div className="output-weather-top">
                    <span className="city">
                        <i> <FaCity /> {data.city}</i>
                       
                    <i className="country"> <GrMapLocation />{data.country}</i>
                   
                    </span>
                    <span className="temp">
                        <i className="avg-temp"> <TbTemperature />  Average :{Math.round(data.temp - 273.15)} °C </i>
                        <i className="max-temp"> <FaTemperatureHigh /> Max: {Math.round(data.min_temp - 273.15)} °C</i>
                        <i className="min-temp"> <FaTemperatureLow />  Min: {Math.round(data.max_temp - 273.15)} °C</i>
                    
                       
       
                    </span>
                    <span className="desc">
                        <h3>Others</h3>
                        <i className="humidity"><WiHumidity /> {data.humidity} %</i>
                        <i className="pressure">Pressure :  {data.pressure} Bar</i>
                        <i className="weather">Weather Description : {data.weather} </i>
                        <i className="details">  Live Weather : {data.description} </i>
                    </span>
                    

                    </div>
                   
                    
                    {/* <p>City : {data.city}<br />
                    Temp: {Math.round(data.temp - 273.15)} deg C <br />
                    Max-Temp: {Math.round(data.min_temp - 273.15)} deg C<br />
                    Min-Temp: {Math.round(data.max_temp - 273.15)} deg C<br />
                    Pressure: {data.pressure} Bar <br />
                    Humidity: {data.humidity} %<br />
                    Weather: {data.weather} <br />
                    Description: {data.description}
                    </p> */}

                </div>
            </div>
        </div>
    </div>
  )
}

export default Home