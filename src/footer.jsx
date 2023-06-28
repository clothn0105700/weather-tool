
import {BiWater} from "react-icons/bi"
import {FiWind} from "react-icons/fi"

const footer = ({humidity,wind}) => {
  return (
    <div className='flex justify-around items-center mt-10 text-blue-950'>
        <div className='flex items-center'> 
            <BiWater className=' w-10 h-10 mr-2'/>
            <p className=' text-lg leading-5'>{humidity}% <br/> humidity</p>
        </div>
        <div className='flex items-center'>
            <FiWind className=' w-10 h-10 mr-2'/>
            <p className=' text-lg leading-5'>{wind} Km/h <br/> wind speed</p>
        </div>
    </div>
  )
}

export default footer