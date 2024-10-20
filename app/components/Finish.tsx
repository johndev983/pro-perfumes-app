'use client'

import { useState, useEffect } from 'react';
import { Inventory } from '../interfaces';
import { Loading } from './';

import Fireworks from 'react-canvas-confetti/dist/presets/fireworks'

interface Props {
  data: Inventory | undefined
}

export const Finish = ({ data }: Props) => {
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
                <div className={`${ !data?.name ? 'text-xl lg:text-3xl' : 'text-2xl lg:text-6xl' }`}>
                  {
                    !data?.name
                      ? 'No tenemos un perfume ideal con esas características en este momento...'
                      : data?.name
                  }
                </div>
                <div className="text-xm lg:text-3xl text-yellow-500">
                  {
                    !!data?.name && 'Es tu perfume ideal'
                  }
                </div>
              </div>
            </div>

            {
              !!data?.name && <Fireworks autorun={{ speed: 1 }} />
            }
          </>
        )
      }
    </>
  )
}
