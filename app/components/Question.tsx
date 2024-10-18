'use client'

import { useMemo, useState } from 'react'
import { QuestionItem } from './QuestionItem'

import { Question as QuestionInteface } from '../interfaces/question.interface'

interface Props {
  onSaveResponse:   (property: string, response: string | string[]) => void
  currentQuestion:  QuestionInteface;
}

export const Question = ({ onSaveResponse, currentQuestion }: Props) => {
  const [ selectedOption, setSelectedOption ] = useState<string | null>(null)

  const handleOptionChange = useMemo(() => ( option: string ) => {
    setSelectedOption( option )
    onSaveResponse( currentQuestion.title.toLowerCase().replace(/ /g, ''), option )

  }, [ currentQuestion, onSaveResponse ])

  return (
    <>
      <span className="flex items-end text-5xl text-yellow-500">
        Preguntas
        <svg className="fill-yellow-500 ml-2" width="20" height="20" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" />
        </svg>
      </span>

      <h1 className="text-2xl lg:text-3xl">{ currentQuestion.question }</h1>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {
          currentQuestion.response.map((question, index) => (
            <QuestionItem
              { ...question }
              key={ index }
              isSelected={ selectedOption === question.after }
              onClick={ handleOptionChange }
            />
          ))
        }
      </div>
    </>
  )
}
