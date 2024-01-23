import { ReactElement } from 'react'

interface Props {
  children: ReactElement
}

export const GridOrders = ({
  children
}:Props) => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1.5 m-1.5 lg:gap-4 lg:m-4 mb-28'>
      {children}
    </div>
  )
}
