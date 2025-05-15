import React from 'react'
import apple from "../images/logo/apple.jpg"

const AboutPage = () => {
  return (
     <div
          className="relative max-w-[90%] mx-auto mt-[100px] rounded-xl bg-cover bg-center  text-white p-10"
          style={{
            height: "500px",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${apple})`,
          }}
        >
          <div className="space-y-4 flex items-center justify-center translate-y-40">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight ">
           About Us
            </h1>
            
          </div>
        </div>
    
  )
}

export default AboutPage