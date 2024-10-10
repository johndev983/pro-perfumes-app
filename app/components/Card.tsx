import { CardContent, CardIcon } from './'

interface Props {
  icon:     React.ReactNode;
  subTitle: string;
  title:    string;
}

export const Card = ({ icon, subTitle, title }: Props) => {
  return (
    <div className="flex items-center justify-center gap-8 w-full max-w-sm">
      <div className="step">
        <CardIcon>{ icon }</CardIcon>
        <CardContent subTitle={ subTitle } title={ title } />
      </div>
    </div>
  )
}