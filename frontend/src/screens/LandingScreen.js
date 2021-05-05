import React, { useEffect, useState } from 'react'

const LandingScreen = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    console.log(menuOpen)
    console.log(window.innerWidth)

    let screenWidth = window.innerWidth;
    console.log(screenWidth)

    useEffect(() => {
      if(screenWidth >= 768) {
        setMenuOpen(false)
      }
    }, [screenWidth])

    

    return (<div>

      <div className="bg-indigo-900 px-4 py-4">
      <div
        className="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between md"
      >
        <div className={menuOpen ? '' : ''}>
        <div className="flex justify-between items-center">
            <button href="#" className="inline-block py-2 text-white text-xl font-bold"
              >Text Scheduler</button>
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-block cursor-pointer md:hidden">
              <div className="bg-gray-400 w-6 mb-1" style={{height: '1px'}}></div>
              <div className="bg-gray-400 w-6 mb-1" style={{height: '1px'}}></div>
              <div className="bg-gray-400 w-6" style={{height: '1px'}}></div>
            </div>
          </div>

          {menuOpen && screenWidth &&
          <div>menu is open</div>}
        </div>
        
        <div>
          <div className="hidden md:block">
            <button
              href="#"
              className="inline-block py-1 md:py-4 text-gray-100 mr-6 font-bold"
              >How it Works</button>
            <button
              href="#"
              className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-100 mr-6"
              >Services</button>
            <button
              href="#"
              className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-100"
              >Blog</button>
          </div>
        </div>
        <div className="hidden md:block">
          <button
            href="#"
            className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-100 mr-6"
            >Login</button>
          <button
            href="#"
            className="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-100 rounded-lg"
            >Sign Up</button>
        </div>
      </div>
    </div>

      <div className="bg-indigo-900 md:overflow-hidden">
      <div className="px-4 py-20 md:py-4">
        <div className="md:max-w-6xl md:mx-auto">
          <div className="md:flex md:flex-wrap">
            <div className="md:w-1/2 text-center md:text-left md:pt-16">
              <h1
                className="font-bold text-white text-2xl md:text-5xl leading-tight mb-4"
              >
                Communicating made easier
              </h1>

              <p className="text-indigo-200 md:text-xl md:pr-48">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                vitae corrupti asperiores veritatis dolorum, commodi aperiam
                enim.
              </p>

              <button
                href="#"
                className="mt-6 mb-12 md:mb-0 md:mt-10 inline-block py-3 px-8 text-white bg-red-500 hover:bg-red-600 rounded-lg shadow"
                >Get Started</button>
            </div>
            
          </div>
        </div>
      </div>
      <svg
        className="fill-current text-white hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path fillOpacity="1" d="M0,224L1440,32L1440,320L0,320Z"></path>
      </svg>
    </div>
    </div>
    )
}

export default LandingScreen
