import React from 'react'
import person_text from '../assets/person_text.svg'
import downArrow from '../assets/down-arrow.svg'

const Hero = () => {
  return (
    <section>
      <div className="w-full bg-Foreground flex flex-col m-auto px-44 pr-50 py-20 drop-shadow-lg">
        <h1 className="text-Heading font-bold text-5xl mb-12">
          Your emails, texts,
          <br/>
          and documents
          <br/>
          <span className="text-Exclusive">simplified.</span>
        </h1>
        <div className="text-Normal text-lg flex mb-20">
          <img src={person_text} className="w-32 mr-8 drop-shadow-sm"/>
          <div>
          tldr.ai uses AI to simplify your emails, texts,
          <br/>
          and documents into jot notes or shorter sentences. 
          <br/>
          It's like a personal assistant that helps you
          <span className="text-Exclusive font-medium"> highlight</span>
          <br/>
          key points, so you can focus on what
          <span> </span>
          <span className="font-medium underline italic">matters</span>.
          </div>
        </div>
       </div>
    </section>
  )
}

export default Hero