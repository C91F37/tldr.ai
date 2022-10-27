import React from 'react'
import features from '../assets/features.svg'

const Features = () => {
  return (
    <section id="features">
      <div className="w-full bg-Background flex flex-col m-auto px-44 pr-50 py-20 drop-shadow-md">
        <h1 className="text-Heading font-bold text-5xl mb-12">
          Features
        </h1>
        <div className="text-Normal text-lg flex mb-16">
          <img src={features} className="w-32 mr-8 drop-shadow-sm" />
          Behold!
          <br />
          tldr.ai includes text simplification...
        </div>
        <div className="flex justify-between drop-shadow-md mb-20">
          <ul className="bg-Foreground rounded-lg w-72 h-72">
            <li className="flex justify-center text-Heading py-5 font-medium text-2xl">Text simplification</li>
            <li className="flex justify-center text-Normal py-5 text-xl">
              Lorem ipsum dolor sit amet,
              <br />consectetur adipiscing elit.
            </li>
          </ul>
          <ul className="bg-Foreground rounded-lg w-72 h-72">
            <li className="flex justify-center text-Heading py-5 font-medium text-2xl">Header 2.</li>
            <li className="flex justify-center text-Normal py-5 text-xl">
              Lorem ipsum dolor sit amet,
              <br />consectetur adipiscing elit.
            </li>
          </ul>
          <ul className="bg-Foreground rounded-lg w-72 h-72">
            <li className="flex justify-center text-Heading py-5 font-medium text-2xl">Header 3.</li>
            <li className="flex justify-center text-Normal py-5 text-xl">
              Lorem ipsum dolor sit amet,
              <br />consectetur adipiscing elit.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Features