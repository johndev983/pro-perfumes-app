import { Question as QuestionInteface } from '../interfaces/question.interface'

interface Props {
  question: QuestionInteface;
}

export const Question = ({ question }: Props) => {
  return (
    <>
      <span className="flex items-end text-5xl text-yellow-500">
        Preguntas
        <svg className="fill-yellow-500 ml-2" width="20" height="20" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" />
        </svg>
      </span>

      <h1 className="text-2xl lg:text-3xl">{ question.question }</h1>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {
          question.response.map(({ before }, index) => (
            <div key={ index } className="flex justify-center items-center bg-stone-600 p-3.5 rounded-xl text-neutral-400">
              { before }
            </div>
          ))
        }
      </div>
    </>
  )
}
