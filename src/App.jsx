import Search from "./search"
import Weather from "./weather"
import Temperature from "./temperature"
import Footer from "./footer"
import axios from 'axios'
import { useState,useEffect } from "react"


const App = () => {
  const [weather, setWeather] = useState([])
  //子傳父
  const [city, setCity] = useState("")
  const [temp , setTemp] = useState("")
  const [weatherId , setWeatherId] = useState("")
  const [description, setDescription] = useState("")
  const [humidity , setHumidity] = useState("")
  const [wind, SetWind] = useState("")


  const ApiKey = "e17a2ea32671650321807c00c6d0599c"
  const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`
  
 
  const handleCallback = (childData) => {
    setCity(childData);
  };

  useEffect(() => {
    async function getWeather(){
      let response = await axios.get(ApiUrl)
      setWeather(response)
    }
    if(city){
      getWeather()
    }
  },[city])

  useEffect(() => {
    if(weather.data){
      setTemp(weather.data.main.temp)
      setWeatherId(weather.data.weather[0].id)
      setDescription(weather.data.weather[0].description)
      setHumidity(weather.data.main.humidity)
      SetWind(weather.data.wind.speed)
    }
   
  },[weather])

  console.log(weather)
  console.log(temp)
  console.log(description)
  console.log(humidity)
  console.log(wind)
  

  return (

      <div className="bg-slate-400 w-[26rem] h-[40rem] rounded-3xl">
        <Search handleCallback={handleCallback}/>
        <Weather weatherId={weatherId} description={description}/>
        <Temperature temp={temp}description={description}/>
        <Footer humidity={humidity} wind={wind}/>
      </div>

  )
}

export default App