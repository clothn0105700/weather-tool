
import { useState } from "react"
import {FaMapMarkerAlt, FaSearch} from "react-icons/fa"

const search = ({handleCallback}) => {
  const [search, setSearch] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  //子傳父
  const handleClick = () => {
    handleCallback(search)
  }

  console.log(search)
  return (
    <div className="flex  justify-center pt-7 text-blue-950">
      <div className=""><FaMapMarkerAlt className=" w-8  h-8"/></div>
        <input type="text" onChange={handleChange} placeholder="請輸入城市(英文)" className=" bg-slate-400 text-center w-60 ml-5 mr-5 text-2xl placeholder:text-blue-950"></input>
      <button className=" block" onClick={handleClick}><FaSearch className=" w-8  h-8 "/></button>
    </div>
  )
}

export default search