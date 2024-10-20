interface Props {
  after:      string;
  before:     string;
  isSelected: boolean;
  onClick: (  option: string ) => void;
}

export const QuestionItem = ({ after, before, isSelected, onClick }: Props) => {
  const content = isSelected ? after : before;
  
  return (
    <button
      onClick={ () => onClick( before ) }
      className={`button-questions ${ isSelected ? 'selected' : '' }`}
    >
      { content }
    </button>
  )
}