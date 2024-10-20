'use client'

import { QuestionItem } from './'

import { Question as QuestionInterface } from '../interfaces'
import { useQuestion } from '../hooks';

interface Props {
  onSaveResponse:   (property: string, response: string | string[]) => void;
  currentQuestion:  QuestionInterface;
}

export const Question = ({ onSaveResponse, currentQuestion }: Props) => {
  const { handleOptionChange, isSelected } = useQuestion( currentQuestion, onSaveResponse );

  return (
    <>
      <span className="flex items-end text-5xl text-yellow-500">
        Preguntas
        <svg className="fill-yellow-500 ml-2" width="20" height="20" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" />
        </svg>
      </span>

      <h1 className="text-xl lg:text-2xl">{ currentQuestion.question }</h1>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {
          currentQuestion.response.map((question, index) => (
            <QuestionItem
              { ...question }
              key={ index }
              isSelected={ isSelected( question.before ) }
              onClick={ handleOptionChange }
            />
          ))
        }
      </div>
    </>
  )
}
