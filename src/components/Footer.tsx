import { CirclesThreePlus } from 'phosphor-react'
import { Clock, ModalNewOrder } from './'
import { useState } from 'react'

export const Footer = () => {
  const [show, setShow] = useState(false)
  return (
    <footer className='fixed flex justify-between items-center bottom-0 p-5 border-t border-slate-200 bg-white shadow-2xl w-full'>
      <Clock />

      <button onClick={() => setShow(true)} className='bg-black/90 transition-all hover:bg-black text-lg text-white px-5 py-3 rounded-lg shadow-sm hover:shadow-md flex font-semibold gap-2'><CirclesThreePlus size={24} weight="bold" /> New order</button>
      <ModalNewOrder show={show} setShow={setShow} />
    </footer>
  )
}
