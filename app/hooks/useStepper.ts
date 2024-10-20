import { useEffect, useState } from 'react'
import { inventory, preferencesData, questions } from '../helpers'
import { Inventory, Preferences } from '../interfaces';

export const useStepper = () => {
  const [ currentStep, setCurrentStep ] = useState( 1 );
  const [ isComplete, setisComplete ] = useState( false );
  
  const [ response, setResponse ] = useState<Inventory>();
  const [ preferences, setPreferences ] = useState( preferencesData );

  useEffect(() => {
    if ( !preferences.basicData ) return;
    
    const recommendations = inventory.filter(perfume => searchForMatches(perfume, preferences));
    const position = Math.floor(Math.random() * recommendations.length);
    setResponse(recommendations[position])
    // console.log( recommendations.slice(0, 2) ); // Devolver los primeros 2 resultados
    
  }, [ isComplete ])

  const onStepChange = ( step: number ) => {
    if ( currentStep === questions.length && step > questions.length )
      setisComplete( true )
    else
      if ( step >= 1 ) {
        const activeStep = Object.values(preferences).filter(
          preference => preference !== '' && preference.length !== 0
        )

        if ( activeStep.length === (step - 1) || activeStep.length > (step - 1))
          setCurrentStep( step )
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
    const preference = preferences.olfactoryNotes.map(
      preference => preference.split('(')[1].split(')')[0].split(',').map(note => note.toLowerCase())
    );

    const olfactoryNotes = perfume.olfactoryNotes.filter(olfactoryNote => preference[0].includes(olfactoryNote));

    // Verificar si las preferencias de aroma coincide
    const scent = preferences.scent.includes(perfume.scent)

    // Verificar si el aroma a evitar coincide
    const scentToAvoid = preferences.scentToAvoid.some(scentToAvoid => scentToAvoid === perfume.scent ? false : true)

    // Verificar si el género coincide
    const gender = perfume.gender === 'man';

    // Verificar si la intensidad coincide
    let intensity;

    if ( preferences.intensity.split('y').length > 1 ) {
      const preference = preferences.intensity.split('y').map(intensity => intensity.toLowerCase().trim());
      intensity = preference.some(intensity => perfume.intensity.includes(intensity));

    } else {
      intensity = perfume.intensity.includes(preferences.intensity);
    }

    return olfactoryNotes.length > 0 || scent && scentToAvoid && gender && intensity;
  }
  
  return {
    currentStep,
    isComplete,
    onSaveResponse,
    onStepChange,
    response
  }
}
