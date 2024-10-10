interface Props {
  onClick: () => void;
  text:    string;
}

export const Back = ({ onClick, text }: Props) => {
  return (
    <button
      type="button"
      className="hidden lg:flex items-center py-2.5 px-6 text-sm bg-neutral-700 rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-stone-600 hover:text-yellow-500"
      onClick={ onClick }
    >
      <svg className="fill-yellow-500 mr-2" width="15" height="15" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M903.232 768l56.768-50.432L512 256l-448 461.568 56.768 50.432L512 364.928z" />
      </svg>
      { text }
    </button>
  )
}
