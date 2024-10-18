import { memo } from 'react'

interface Props {
  subTitle: string;
  title:    string;
} 

const Component = memo(({ title, subTitle }: Props) => {
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
})

Component.displayName = 'CardContent';

export const CardContent = memo(Component);