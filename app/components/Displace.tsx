'use client'

import { useState } from 'react'

interface Props {
  currentStep:  number;
  onClick:      ( step: number ) => void;
  text:         string;
}

export const Displace = ({ currentStep, onClick, text }: Props) => {
  const [ step, setStep ] = useState( currentStep * 10 )
  
  const onChangeStep = ( step: number ) => {
    onClick( step );
    if (step >= 1) setStep( step * 10 )
  }

  return (
    <div className="w-full border-2 border-yellow-500 rounded-md fixed bottom-0 lg:hidden">
      <div className="flex items-center justify-between gap-3 p-3 bg-stone-600 rounded">
        <button
          className="flex items-center gap-1.5 border-none text-base font-medium py-2.5 text-neutral-300 transition-all duration-300 hover:text-yellow-600"
          onClick={ () => onChangeStep( currentStep - 1 ) }
        >
          <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
            <path d="M8.25324 6.37646L13.7535 11.8767L8.25 17.3802" stroke="currentColor" />
          </svg>
          Back
        </button>

        <div className="w-full max-w-xs bg-gray-100 rounded-3xl h-2">
          <div className={`bg-yellow-600 w-[${ step }%] h-2 rounded-3xl`}></div>
        </div>
        
        <button
          className="flex items-center gap-1.5 border-none text-base font-medium py-2.5 text-neutral-300 transition-all duration-300 hover:text-yellow-600"
          onClick={ () => onChangeStep( currentStep + 1 ) }
        >
          { text }
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
            <path d="M8.25324 6.37646L13.7535 11.8767L8.25 17.3802" stroke="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  )
}
