import { useEffect, useState } from 'react'
import { inventory, preferencesData, questions } from '../helpers'
import { Inventory, Preferences } from '../interfaces';

export const useStepper = () => {
  const [ currentStep, setCurrentStep ] = useState( 1 );
  const [ isComplete, setisComplete ] = useState( false );
  const [ preferences, setPreferences ] = useState( preferencesData );

  useEffect(() => {
    if ( !preferences.basicData ) return;
    
    const recommendations = inventory.filter(perfume => searchForMatches(perfume, preferences));
    console.log( recommendations.slice(0, 2) ); // Devolver los primeros 2 resultados
    
  }, [ isComplete ])

  const onStepChange = ( step: number ) => {
    if ( currentStep === questions.length && step > questions.length )
      setisComplete( true )
    else
      if ( step >= 1 ) {
        if ( Object.keys(preferences)[step - 2] || step < 2 ) {
          setCurrentStep( step )
        }
      }
  }

  const onSaveResponse = ( property: string, response: string | string[] ) => {
    if ( property && response ) {
      setPreferences(( prev ) => ({
        ...prev,
        [property]: response,
      }));
    }
  }

  // Buscar las coincidencias
  const searchForMatches = ( perfume: Inventory, preferences: Preferences ) => {
    // Verificar si alguna nota preferida coincide con las notas del perfume
    const olfactoryNotes = perfume.olfactoryNotes.filter(
      olfactoryNote => preferences.olfactoryNotes.includes(olfactoryNote)
    );

    // Verificar si el género coincide
    const scent = perfume.scent === preferences.scent;

    // Verificar si el género coincide
    // const gender = perfume.gender === preferences.gender;

    // Verificar si la intensidad coincide
    // const intensity = preferences.intensity.some(( intensity: string ) => perfume.intensity.includes(intensity));

    // return olfactoryNotes.length > 0 && scent && gender && intensity;
    return olfactoryNotes.length > 0 && scent;
  }
  
  return {
    currentStep,
    isComplete,
    onSaveResponse,
    onStepChange
  }
}
