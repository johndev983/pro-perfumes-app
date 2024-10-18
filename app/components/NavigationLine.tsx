interface Props {
  percentage: number;
}

export const NavigationLine = ({ percentage }: Props) => {
  return (
    <div className="w-full max-w-xs bg-gray-100 rounded-3xl h-2">
      <div className={`bg-yellow-600 w-[${ percentage }%] h-2 rounded-3xl`}></div>
    </div>
  )
}