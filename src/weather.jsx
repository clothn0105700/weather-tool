
const weather = ({ weatherId ,description }) => {
  return (
    <div className="flex justify-center items-center mt-10 move">
        { weatherId >= 200 && weatherId <= 299 ? <img src="./public/snow.png" className=" w-[18rem] h-[18rem]"/> : null}
        { weatherId >= 300 && weatherId <= 399 ? <img src="./public/rain.png" className=" w-[18rem] h-[18rem]"/> : null}
        { weatherId >= 500 && weatherId <= 599 ? <img src="./public/rain.png" className=" w-[18rem] h-[18rem]"/> : null}
        { weatherId >= 600 && weatherId <= 699 ? <img src="./public/snow.png" className=" w-[18rem] h-[18rem]"/> : null}
        { weatherId >= 700 && weatherId <= 799 ? <img src="./public/mist.png" className=" w-[18rem] h-[18rem]"/> : null}
        { weatherId === 800 ? <img src="./public/clear.png" className=" w-[18rem] h-[18rem]"/> : null}
        { weatherId >= 801 && weatherId <= 899 ? <img src="./public/cloud.png" className=" w-[18rem] h-[18rem]"/> : null}
        { !weatherId ? <img src="./public/404.png" className=""/> : null}
        
    </div>
  )
}

export default weather