import { ReactElement } from 'react'

interface Props {
  text: string
  children: ReactElement
}

export const EmptyState = ({
  children,
  text
}:Props) => {
  return (
    <div className='py-72 flex flex-col justify-center items-center'>
      <p className='text-slate-600'>{children}</p>
      <p className='text-slate-600 text-3xl font-semibold'>{text}</p>
    </div>
  )
}
