'use client'

import { useState } from 'react'
import { Back, Card, Displace, Next, Question } from './'
import { questions } from '../helpers/questions';

import './stepper.css'

export const Stepper = () => {
  const [ currentStep, setCurrentStep ] = useState( 1 );
  const [ complete, setComplete ] = useState( false );

  const onDisplace = ( step: number ) => {
    if ( currentStep === questions.length && step > questions.length )
      setComplete( true )
    else 
      step >= 1 && setCurrentStep( step )
  }

  return (
    <>
      <div className="w-1/3 hidden lg:block">
        <ol className="overflow-hidden space-y-8">
          {
            questions.map(( question, index ) => (
              <li
                key={ index }
                className={`step-item ${ currentStep === index + 1 ? 'active' : 'inactive' } ${ ( index + 1 < currentStep || complete ) ? 'complete' : 'incomplete' }`}
              >
                <Card
                  { ...question }
                  icon={ 
                    index + 1 < currentStep || complete
                      ? <path d="M20.6097 5.20743C21.0475 5.54416 21.1294 6.17201 20.7926 6.60976L10.7926 19.6098C10.6172 19.8378 10.352 19.9793 10.0648 19.9979C9.77765 20.0166 9.49637 19.9106 9.29289 19.7072L4.29289 14.7072C3.90237 14.3166 3.90237 13.6835 4.29289 13.2929C4.68342 12.9024 5.31658 12.9024 5.70711 13.2929L9.90178 17.4876L19.2074 5.39034C19.5441 4.95258 20.172 4.87069 20.6097 5.20743Z" />
                      : question.icon
                   }
                />
              </li>
            ))
          }
        </ol>
      </div>

      <div className="flex flex-col gap-10 w-full pl-0 lg:pl-5 2xl:pl-14">
        <Question question={ questions[currentStep - 1] } />

        <div className='flex justify-end gap-5'>
          {
            complete || currentStep > 1 && (
              <Back onClick={ () => onDisplace( currentStep - 1 ) } text="Back" />
            )
          }

          {
            !complete && (
              <Next onClick={ () => onDisplace( currentStep + 1 ) } text={ currentStep === questions.length ? 'Finish' : 'Next' } />
            )
          }
        </div>
      </div>

      <Displace
        currentStep={ currentStep }
        onClick={ onDisplace }
        text={ currentStep === questions.length ? 'Finish' : 'Next' }
      />
    </>
  );
};