import React from "react";
import { GiChainedArrowHeads } from "react-icons/gi";
import { Link } from "react-router-dom";
// import "./App.css";
export const Home = () => {
  return (
    <div className='BGwish h-screen'>
      {/* YOU LOOK CUTE TODAY */}
      <h1
        className='md:grid grid-cols-10 md:h-screen overflow-hidden'
        transition-style='in:circle:hesitate'
      >
        <a href='/vote' className='col-span-5'>
          <div
            className='bg-pink-500  col-span-5 flex flex-col justify-center items-center md:h-screen h-128 hover:scale-105 hover:cursor-pointer hover:bg-pink-400 transition duration-500 '
            transition-style='in:wipe:right'
          >
            <div className='text-white font-mono text-4xl md:text-5xl'>
              Cast Your Vote
            </div>

            <div className='flex space-x-3'>
              <GiChainedArrowHeads className='-rotate-45 text-white ' />
              <GiChainedArrowHeads className='-rotate-45 text-white ' />
              <GiChainedArrowHeads className='-rotate-45 text-white ' />
              <GiChainedArrowHeads className='-rotate-45 text-white ' />
              <GiChainedArrowHeads className='-rotate-45 text-white ' />
              <GiChainedArrowHeads className='-rotate-45 text-white ' />
              <GiChainedArrowHeads className='rotate-135  text-white ' />
              <GiChainedArrowHeads className='rotate-135  text-white ' />
              <GiChainedArrowHeads className='rotate-135  text-white ' />
              <GiChainedArrowHeads className='rotate-135  text-white ' />
              <GiChainedArrowHeads className='rotate-135  text-white ' />
              <GiChainedArrowHeads className='rotate-135  text-white ' />
            </div>
          </div>
        </a>

        {/* </Link> */}
        <a href='/add' className='col-span-5'>
          <div
            className='bg-yellow-400 col-span-5 justify-center items-center flex flex-col  md:h-screen h-128 hover:scale-105 hover:cursor-pointer hover:bg-yellow-300 transition duration-500 text-violet-400 '
            transition-style='in:wipe:left'
          >
            <div className=' font-mono text-4xl md:text-5xl text-violet-400'>
              Nominate Yourself
            </div>
            <div className='flex space-x-3'>
              <GiChainedArrowHeads className='-rotate-45 text-violet-400 ' />
              <GiChainedArrowHeads className='-rotate-45 text-violet-400 ' />
              <GiChainedArrowHeads className='-rotate-45 text-violet-400 ' />
              <GiChainedArrowHeads className='-rotate-45 text-violet-400 ' />
              <GiChainedArrowHeads className='-rotate-45 text-violet-400 ' />
              <GiChainedArrowHeads className='-rotate-45 text-violet-400 ' />
              <GiChainedArrowHeads className='-rotate-45 text-violet-400 ' />
              <GiChainedArrowHeads className='-rotate-45 text-violet-400 ' />
              <GiChainedArrowHeads className='rotate-135  text-violet-400 ' />
              <GiChainedArrowHeads className='rotate-135  text-violet-400 ' />
              <GiChainedArrowHeads className='rotate-135  text-violet-400 ' />
              <GiChainedArrowHeads className='rotate-135  text-violet-400 ' />
              <GiChainedArrowHeads className='rotate-135  text-violet-400 ' />
              <GiChainedArrowHeads className='rotate-135  text-violet-400 ' />
              <GiChainedArrowHeads className='rotate-135  text-violet-400 ' />
            </div>
          </div>
        </a>
      </h1>
    </div>
  );
};
