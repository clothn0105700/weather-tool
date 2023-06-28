import {RiCelsiusLine} from "react-icons/ri"

const temperature = ({temp, description}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
        <div className=" relative w-28">
            <p className=" text-5xl text-center">{!temp ? "0" : Math.round(temp - 273.15)}</p>
            <p className=" absolute top-0 right-0"><RiCelsiusLine className=" w-6 h-6"/></p>
        </div>
        <p className=" text-2xl">{description}</p>
    </div>
  )
}

export default temperature