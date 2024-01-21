import { Clock } from './Clock'

export const Footer = () => {
  return (
    <footer className='fixed flex justify-between items-center bottom-0 p-5 bg-slate-100 w-full'>
      <Clock />

      <button className='bg-black text-lg text-white px-5 py-3 rounded-md'>New order</button>
    </footer>
  )
}
