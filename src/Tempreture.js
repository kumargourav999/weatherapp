import React, { useEffect, useState } from 'react'

export default function Tempreture() {
    const [city,setcity]=useState(null);
    const [search,setsearch]=useState("mumbai");
    const apiKey="bd4e3756eedc5152a391e31f3c0ee77f";
    useEffect(()=>{
        const fetchapi= async() =>{
           
            const url="https://api.openweathermap.org/data/2.5/weather?q=" + search + "&units=metric&appid=" + apiKey;
            const response=  await fetch(url);
            const responsejson= await response.json();
            console.log(responsejson);
            setcity(responsejson.main);
        }
        fetchapi();
    },[search]);
    var img;
    if(city)
    if((city.temp)>30)
    {
       img={backgroundImage:`url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp")`}        
    }
    else{
      img={backgroundImage:`url("https://img.freepik.com/premium-photo/sunny-sky-with-clouds_87394-1064.jpg")`}
    }
  return (
    <>
    
      
    <div style={img} className="body">
    <h1>WEATHER APP</h1>
    <div>Tempreture</div>
    <div>
        <input
         type="search"
         className='input'
         onChange={(e)=>{setsearch(e.target.value)}}
         />
    </div>
    {!city?(<p>no data found</p>):
    <div className='info'>
        <h2 className='location'>{search}</h2>
        <h1 className="temp">{city.temp} *cel</h1> 
       
        <h3 className='temprange'>Min :  {city.temp_min}*cel | Max : {city.temp_max}*cel</h3>
    </div>
    }
    </div>
  
    </>
  )
}

