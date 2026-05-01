import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className="relative bg-black min-h-screen">
      {/* 1. Navbar: Ye sabse upar rahega */}
      <Navbar />

      {/* 2. Hero Section: Isko hum fixed/sticky rakhenge */}
      <div className="sticky top-0 h-screen w-full z-0 overflow-hidden">
        <img 
          src="https://s7ap1.scene7.com/is/image/TCSCOMprod/c-testimonial-hero-v-AVS?fit=constrain,1&wid=799&hei=730" 
          alt="hero banner" 
          className='h-full w-full object-cover' 
        />
        {/* Optional Overlay taaki text clear dikhe */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* 3. Content Section: Ye image ke upar chadh kar aayega */}
      <div className="relative z-10 bg-white min-h-screen p-10 md:p-20">
        <div className="max-w-6xl mx-auto space-y-10">
          <h4 className="uppercase tracking-[0.2em] font-bold text-sm text-gray-800">
            TECHNOLOGY AT SCALE, PARTNERSHIPS THAT GO THE DISTANCE
          </h4>
          
          <h1 className="text-3xl md:text-5xl font-light text-black leading-tight">
            The world’s most recognised companies across the Fortune 500, FTSE 100, S&P 500 
            and Dow Jones Industrial Average, partner with us to scale technology, adapt through 
            change, and lead with confidence.
          </h1>

          {/* Extra dummy content taaki scroll feel ho */}
          <div className="py-20">
            <p className="text-gray-600 text-xl">
               Aapka baki ka content yahan aayega. Jab aap scroll karenge, 
               ye pura white box upar ki taraf jayega aur hero image piche fix rahegi.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home