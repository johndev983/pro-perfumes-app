import { useEffect, useMemo, useState } from 'react'
import { Question } from '../interfaces';

export const useQuestion = ( currentQuestion: Question, onSaveResponse: (property: string, response: string | string[]) => void ) => {
  const [ selectedOption, setSelectedOption ] = useState<string | null>( null )
  const [ selectedMultipleOption, setSelectedMultipleOption ] = useState<string[]>( [] )
  
  useEffect(() => {
    setSelectedOption(null);
    setSelectedMultipleOption([]);
  }, [ currentQuestion ]);

  useEffect(() => {
    if ( selectedMultipleOption.length > 0 )
      onSaveResponse( currentQuestion.reference, selectedMultipleOption )

  }, [ selectedMultipleOption ])

  const handleOptionChange = useMemo(() => ( option: string ) => {
    if ( !currentQuestion.multiple ) {
      setSelectedOption( option )
      onSaveResponse( currentQuestion.reference, option )

    } else {
      setSelectedMultipleOption((prev) => {
        return !prev.includes(option) ? [...prev, option] : prev
      })
    }

  }, [ currentQuestion, onSaveResponse ])

  const isSelected = ( question: string ) => {
    if ( !currentQuestion.multiple )
      return selectedOption === question
    else
      return selectedMultipleOption.includes( question )
  }

  return {
    handleOptionChange,
    isSelected
  }
}
