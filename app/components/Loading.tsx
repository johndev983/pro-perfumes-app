import Image from 'next/image'
import loadingImage from '../assets/loading.png'

export const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-[100vh] text-gray-100">
      <div>
        <h1 className="text-3xl md:text-7xl font-bold flex items-end">
          L
          <Image
            className="animate-bounce ml-1 w-7 h-7 md:ml-3 md:w-14 md:h-14"
            src={ loadingImage }
            alt="Picture of the author"
          />
          ading

          <div className="flex gap-2 ml-2 mb-1 md:gap-4 md:ml-3">
            {
              [1, 2, 3].map(item => (
                <span key={ item } className="relative flex h-1.5 w-1.5 md:h-3 md:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-100 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-3 md:w-3 bg-gray-200"></span>
                </span>
              ))
            }
          </div>
        </h1>
      </div>
    </div>
  )
}