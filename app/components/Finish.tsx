'use client'

import { useState, useEffect } from 'react';
import { Loading } from './';

import Fireworks from 'react-canvas-confetti/dist/presets/fireworks'

export const Finish = () => {
  const [ isLoading, setIsLoading ] = useState( true )

  useEffect(() => {
    setTimeout(() => {
      setIsLoading( false )
    }, 3000);
  }, [])
  

  return (
    <>
      {
        isLoading && (
          <Loading />
        )
      }

      {
        !isLoading && (
          <>
            <div className="flex justify-center items-center w-full h-[100vh]">
              <div className="grid grid-cols-1 gap-1 lg:gap-3 text-center">
                <div className="text-2xl lg:text-6xl">Aqua di Gio Blanca</div>
                <div className="text-xm lg:text-3xl text-yellow-500">Es tu perfume ideal</div>
              </div>
            </div>
            <Fireworks autorun={{ speed: 1 }} />
          </>
        )
      }
    </>
  )
}
