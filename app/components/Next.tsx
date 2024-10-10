interface Props {
  onClick: () => void;
  text:    string;
}

export const Next = ({ onClick, text }: Props) => {
  return (
    <button
      type="button"
      className="hidden lg:flex items-center py-2.5 px-6 text-sm bg-neutral-700 rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-stone-600 hover:text-yellow-500"
      onClick={ onClick }
    >
      { text }
      <svg className="fill-yellow-500 ml-2" width="15" height="15" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" />
      </svg>
    </button>
  )
}
