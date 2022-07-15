import React from 'react'
import {useState,useEffect} from 'react'

import './Home.css'

const Home = () => {
    const[city,setCity]=useState()
    const [data,setData]=useState([])
    
    const api = async function(){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=52c5a1a41b4740aa8b25d8f8f68e7c4b`
        const apidata = await fetch(url)
        const response = await apidata.json()
       console.log(response)
       setData({
           data:response,
           city:response.name,
           temp:response.main.temp,
           min_temp:response.main.temp_min,
           max_temp:response.main.temp_max,
           pressure:response.main.pressure,
           humidity:response.main.humidity,
           weather:response.weather[0].main,
           description:response.weather[0].description,

                

    })
    console.log("data",response.name)
       
       
        


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
                    <p>City : {data.city}<br />
                    Temp: {Math.round(data.temp - 273.15)} deg C <br />
                    Max-Temp: {Math.round(data.min_temp - 273.15)} deg C<br />
                    Min-Temp: {Math.round(data.max_temp - 273.15)} deg C<br />
                    Pressure: {data.pressure} Bar <br />
                    Humidity: {data.humidity} %<br />
                    Weather: {data.weather} <br />
                    Description: {data.description}
                    </p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Home