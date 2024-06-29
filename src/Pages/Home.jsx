import { NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { useState } from "react";


const Home = () => {
  const [show, setShow]=useState(false)

  const handleShow=()=>{
    setShow(!show)
  }

  return (
    <> 
    <div className="relative h-screen w-full overflow-hidden">
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop>
          <source src="https://cdn.pixabay.com/video/2023/09/21/181537-866999852_large.mp4" type="video/mp4" />
        </video>
        <div className="main relative w-full p-5">
        <div className="container flex flex-wrap justify-between">
          <div className="logo w-[150px] h-[40px]">
            <img src="https://harnishdesign.net/demo/html/oxyy/images/logo-2-light.png" alt="logo" />
          </div>
          <div className="navBar relative">
            <FaBars onClick={handleShow} className="text-white text-[40px] block md:hidden" />
             {
              show &&
              <ul className="w-[320px] absolute top-[50px] right-[-13px] bg-slate-900 flex flex-col items-center gap-2 rounded-lg md:hidden">
              <li className="transform scale-100 hover:scale-125 transition duration-500"><NavLink to="/" className={({ isActive}) => isActive ? "px-[19px] rounded-lg flex justify-center items-center gap-2 text-[18px] hover:bg-gradient-to-r from-[#7B7B7B] to-[#1F2544] text-white h-10" : "flex justify-center items-center gap-2 bg-[#fff] text-white"}>Home</NavLink></li>
              <li className="transform scale-100 hover:scale-125 transition duration-500"><NavLink to="/" className={({ isActive}) => isActive ? "px-[19px] rounded-lg flex justify-center items-center gap-2 text-[18px] hover:bg-gradient-to-r from-[#7B7B7B] to-[#1F2544] text-white h-10" : "flex justify-center items-center gap-2 bg-[#fff] text-white"}>About</NavLink></li>
              <li className="transform scale-100 hover:scale-125 transition duration-500"><NavLink to="/" className={({ isActive}) => isActive ? "px-[19px] rounded-lg flex justify-center items-center gap-2 text-[18px] hover:bg-gradient-to-r from-[#7B7B7B] to-[#1F2544] text-white h-10" : "flex justify-center items-center gap-2 bg-[#fff] text-white"}>Contact</NavLink></li>
              <li className="transform scale-100 hover:scale-125 transition duration-500"><NavLink to="/" className={({ isActive}) => isActive ? "px-[19px] rounded-lg flex justify-center items-center gap-2 text-[18px] hover:bg-gradient-to-r from-[#7B7B7B] to-[#1F2544] text-white h-10" : "flex justify-center items-center gap-2 bg-[#fff] text-white"}>Blogs</NavLink></li>
              <li className="transform scale-100 hover:scale-125 transition duration-500"><NavLink to="/" className={({ isActive}) => isActive ? "px-[19px] rounded-lg flex justify-center items-center gap-2 text-[18px] hover:bg-gradient-to-r from-[#7B7B7B] to-[#1F2544] text-white h-10" : "flex justify-center items-center gap-2 bg-[#fff] text-white"}>Sign In</NavLink></li>
              <li className="transform scale-100 hover:scale-125 transition duration-500"><NavLink to="/" className={({ isActive}) => isActive ? "px-[19px] rounded-lg flex justify-center items-center gap-2 text-[18px] hover:bg-gradient-to-r from-[#7B7B7B] to-[#1F2544] text-white h-10" : "flex justify-center items-center gap-2 bg-[#fff] text-white"}>Register</NavLink></li>
              </ul>
             }

            <div className="hidden md:block">
              <ul className="text-white flex flex-wrap gap-7">
              <li className="transform scale-100 hover:scale-125 transition duration-500"><NavLink to="/"  className={({ isActive}) => isActive ? "px-[19px] rounded-lg flex justify-center items-center gap-2 text-[18px] hover:bg-gradient-to-r from-[#7B7B7B] to-[#1F2544] text-white h-10" : "flex justify-center items-center gap-2 px-[19px] rounded-lg  h-10 text-[18px] bg-gradient-to-r from-[#7B7B7B] to-[#1F2544] text-white"}>Home</NavLink></li>
              <li className="transform scale-100 hover:scale-125 transition duration-500"><NavLink to="/" className={({ isActive}) => isActive ? "px-[19px] rounded-lg flex justify-center items-center gap-2 text-[18px] hover:bg-gradient-to-r from-[#7B7B7B] to-[#1F2544] text-white h-10" : "flex justify-center items-center gap-2 bg-[#fff] text-white"}>About</NavLink></li>
              <li className="transform scale-100 hover:scale-125 transition duration-500"><NavLink to="/" className={({ isActive}) => isActive ? "px-[19px] rounded-lg flex justify-center items-center gap-2 text-[18px] hover:bg-gradient-to-r from-[#7B7B7B] to-[#1F2544] text-white h-10" : "flex justify-center items-center gap-2 bg-[#fff] text-white"}>Contact</NavLink></li>
              <li className="transform scale-100 hover:scale-125 transition duration-500"><NavLink to="/" className={({ isActive}) => isActive ? "px-[19px] rounded-lg flex justify-center items-center gap-2 text-[18px] hover:bg-gradient-to-r from-[#7B7B7B] to-[#1F2544] text-white h-10" : "flex justify-center items-center gap-2 bg-[#fff] text-white"}>Blogs</NavLink></li>
              <li className="transform scale-100 hover:scale-125 transition duration-500"><NavLink to="/sign" className={({ isActive}) => isActive ? "px-[19px] rounded-lg flex justify-center items-center gap-2 text-[18px] hover:bg-gradient-to-r from-[#7B7B7B] to-[#1F2544] text-white h-10" : "flex justify-center items-center gap-2 px-[19px] rounded-lg  h-10 text-[18px] bg-none hover:bg-gradient-to-r from-[#7B7B7B] to-[#1F2544] text-white"}>Sign In</NavLink></li>
              <li className="transform scale-100 hover:scale-125 transition duration-500"><NavLink to="/register" className={({ isActive}) => isActive ? "px-[19px] rounded-lg flex justify-center items-center gap-2 text-[18px] hover:bg-gradient-to-r from-[#7B7B7B] to-[#1F2544] text-white h-10" : "flex justify-center items-center gap-2 px-[19px] rounded-lg  h-10 text-[18px] bg-none hover:bg-gradient-to-r from-[#7B7B7B] to-[#1F2544] text-white"}>Register</NavLink></li>

              </ul>
            </div>
          </div>
        </div>
        </div>
      <div className="hidden md:block">
      <div className="body relative flex flex-col items-center h-screen mt-[110px] ">
          <h2 className="text-center text-white text-[18px] font-medium">Find cars for sale and for rent near you</h2>
          <h1 className="text-center text-white text-[70px] font-bold">Find Your Perfect Car</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home