import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <section>
      <div className="w-full bg-Background drop-shadow-md">
        <div className="py-6 px-4">
          <nav className="flex flex-row items-center">
            <div className="mr-auto font-fira">
              <a href="#home">
                <div className="flex">
                  <img src={logo} alt="logo" className="w-12" />
                  <div className="transition ease-in-out delay-50 ml-4 font-bold text-Heading text-xl py-4 hover:text-Exclusive">
                    tldr.
                    <span className="text-Exclusive">ai</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="flex flex-row items-center text-Heading font-medium font-fira">
              <ul>
                <li className="transition ease-in-out delay-50 hover:text-Exclusive px-10">
                  <a href="#home">Home</a>
                </li>
              </ul>
              <ul>
                <li className="transition ease-in-out delay-50 hover:text-Exclusive px-10">
                  <a href="#features">Features</a>
                </li>
              </ul>
              <ul>
                <li className="transition ease-in-out delay-50 hover:text-Exclusive px-10">
                  <a href="#about">About</a>
                </li>
              </ul>
              <ul>
                <li className="transition ease-in-out delay-50 hover:text-Exclusive px-10">
                  <a href="#faqs">FAQs</a>
                </li>
              </ul>
            </div>
            <button className="transition ease-in-out delay-50 bg-Exclusive hover:-translate-y-1 hover:bg-Heading duration-300 rounded-lg py-1 px-5 ml-auto text-Heading hover:text-Exclusive font-medium mr-5">
              <a href="" className="drop-shadow-md">Login</a>
            </button>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Navbar