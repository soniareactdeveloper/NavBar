import { Link } from "react-router-dom"
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { useState } from "react";


const SignIn = () => {
  const [pass, setPass]=useState(false)

  const handlePass= ()=>{
    setPass(!pass)
  }
  return (
    <>
      <div className="main flex">
       <div className="left">
         <img className=" w-[600px] h-screen relative" src="Images/bg.jpg" alt="bg" />
         <div className="leftcontent absolute top-0 left-0">
           <div className="logo w-[150px] h-[40px] mt-[48px] ml-[60px]">
            <img src="https://harnishdesign.net/demo/html/oxyy/images/logo-2-light.png" alt="logo" />
           </div>
           <div className="text">
            <h1 className="w-[550px] text-[46px] text-white font-normal pl-7 pt-10"><b>Welcome,</b>We are glad to see you again!</h1>
           </div>
         </div>
       </div>
       <div className="right bg-[#111418] w-[860px] flex flex-wrap  flex-col justify-center items-center h-screen">
         <h3 className="text-lg text-white font-normal">Not a member? <Link className="text-[#0D6EFD]" to="/register">Register</Link></h3>
         <h2 className="text-[28px] text-white font-medium">Log In to Your Account</h2>
         <input className="w-[600px] p-3 bg-[#232A31] mt-6 border-none outline-none rounded-lg text-[18px] text-medium text-white" type="email" placeholder="Enter your Email" />
         {/* password */}
         <div className="relative">
          {
            pass?
            <IoIosEye onClick={handlePass} className="absolute top-[50%] right-[20px] text-[20px] text-[#d7d3d3]"/>
            :
            <IoIosEyeOff onClick={handlePass} className="absolute top-[50%] right-[20px] text-[20px] text-[#d7d3d3]"/>
          }

          <input className="w-[600px] p-3 bg-[#232A31] mt-6 border-none outline-none rounded-lg text-[18px] text-medium text-white" type={pass? "text": "password"} placeholder="Enter your Password" />
         </div>
         <Link className="text-[20px] font-semibold text-white p-4 w-[100px] bg-blue-600 flex justify-center items-center rounded-lg mt-6 hover:bg-white hover:text-blue-600" to="#">Log In</Link>
       </div>


      </div>
    </>

  )
}

export default SignIn