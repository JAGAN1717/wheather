import React, { useState } from "react";
import "./wheather.css";
import axios from "axios"; 

function Wheather(){

    const[getData,setData] = useState({});
    const[locations,setLoacation] = useState('') 
  
    const getWheather =() =>{ 
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${locations}&appid=193620e049c5075ba4fa5e7eebf1aa8b`).then(res=>{
            setData(res.data);
            console.log(res.data)
        })
        
    }


    return(<>
    <div className="wheather">
        <div class="container-fluid px-1 px-sm-3 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="row card0">
            <div class="card1 col-lg-8 col-md-7">
            <div className="search">
      <input  value={locations} onChange={(e)=>setLoacation(e.target.value)} placeholder='Enter Location' type="text" />
        <button type="button" onClick={getWheather} className="btn" >Enter</button>
        </div>
                <small>the.weather</small>
                <div class="text-center">
                    <img class="image mt-5" src="https://i.imgur.com/M8VyA2h.png"/>
                </div>
                <div class="row px-3 mt-3 mb-3">
                    {getData.main ? <h1 class="large-font mr-3">{getData.main.temp.toFixed()}°F</h1> : null}
                    <div class="d-flex flex-column mr-3">
                        <h2 class="mt-3 mb-0">{getData.name}</h2>
                          {getData.main ? <h1>{getData.main.temp.toFixed()}°F</h1> : null}
                    </div>
                    <div class="d-flex flex-column text-center">
                        <h3 class="fa fa-sun-o mt-4"></h3>
                        {getData.weather ? <p>{getData.weather[0].main}</p> : null}
                    </div>
                    <div class="d-flex flex-column text-center">
                        <h3 class="fa fa-sun-o mt-4">humidity</h3>
                        {getData.main ? <p className='bold'>{getData.main.humidity}%</p> : null}
                    </div>
                    <div class="d-flex flex-column text-center">
                        <h3 class="fa fa-sun-o mt-4">Wind Speed</h3>
                        {getData.wind ? <p className='bold'>{getData.wind.speed.toFixed()} MPH</p> : null}
                    </div>
                </div>
            </div>
                   </div>
    </div>
</div>

         </div>
    </>)
}

export default Wheather