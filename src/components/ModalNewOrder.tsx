import { useRef } from 'react'
import { formateHour } from '../store/orders/slice'
import { useOrdersActions } from '../hooks/useOrdersActions'
import { Product } from '../store/orders/slice'
import { X } from 'phosphor-react'
import { useExternalClick } from '../hooks/UseExternalClick'
import { useForm } from '../hooks/useForm'

interface Props {
  show: boolean
  setShow: (show: boolean) => void
}

export const ModalNewOrder = ({
  show,
  setShow,
}: Props) => {
  const { addOrder } = useOrdersActions();
  const modal = useRef<HTMLDivElement | null>(null);
  const { products, setProducts, name, quantity, setName, setQuantity, handleProduct } = useForm();

  useExternalClick({ targetRef: modal, setShow: setShow });

  const handleSubmit = () => {
    addOrder({
      id: crypto.randomUUID(),
      products,
      status: 'queue',
      date: formateHour(new Date()),
    });

    setProducts([]);
    setName('');
    setQuantity(1);
    setShow(false);
  };
  
  return show && (
    <div className='fixed top-0 left-0 grid place-content-center w-full h-screen bg-black/60'>
      <div ref={modal} className='bg-white shadow-md mx-auto w-full flex flex-col gap-6 rounded-xl p-5'>
        <header className='flex justify-between'>
          <h2 className='text-xl font-semibold'>New Order</h2>
          <button onClick={() => setShow(false)} className='bg-slate-100 hover:bg-slate-200 rounded-lg p-2'><X size={16} weight="bold" /></button>
        </header>
        <div className='grid grid-cols-3 gap-4'>
          <div className='flex flex-col justify-between h-full col-span-full md:col-span-2'>
            <form action="" onSubmit={handleProduct} className='flex flex-col gap-3'>
              <div className='flex gap-3'>
                <input
                  className='border-2 border-slate-100 shadow-sm py-2 px-3 rounded-lg w-full'
                  type="text"
                  name='name'
                  placeholder='name...'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  className='border-2 border-slate-100 shadow-sm py-2 px-3 rounded-lg w-20'
                  type="number"
                  name='quantity'
                  min={1}
                  placeholder='Cantidad...'
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value) || 1)}
                />
              </div>

              <button className='mb-6 shadow-sm border border-slate-200 bg-slate-50 hover:bg-slate-100 rounded-md p-2 font-semibold transition-colors' type='submit'>Add product</button>
            </form>
            <button disabled={products.length !== 0 ? false : true} onClick={handleSubmit} className='disabled:bg-black/70 disabled:cursor-not-allowed bg-black text-white w-full font-semibold p-3 rounded-lg'>Submit order</button>
          </div>
          <div className='bg-slate-50 p-3 flex flex-col gap-3 text-center min-h-52 rounded-md col-span-full md:col-span-1 md:w-48'>
            <h3 className='text-lg font-semibold'>List of Products</h3>
            <ul>
              {products.map((product: Product) => (
                <li key={crypto.randomUUID()} className='flex justify-between'>{product.name} <span className='font-bold'>{product.quantity}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
