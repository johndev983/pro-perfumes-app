interface Props {
  subTitle: string;
  title:    string;
} 

export const CardContent = ({ title, subTitle }: Props) => {
  return (
    <div className=" flex items-start rounded-md justify-center flex-col">
      <h6 className="text-base font-semibold text-white mb-0.5">
        { title }
      </h6>
      <p className="text-xs font-normal">
        { subTitle }
      </p>
    </div>
  )
}