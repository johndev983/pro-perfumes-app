interface Props {
  children: React.ReactNode;
}

export const CardIcon = ({ children }: Props) => {
  return (
    <div className="card-icon">
      <span className="p-3">
        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          { children }
        </svg>
      </span>
    </div>
  )
}