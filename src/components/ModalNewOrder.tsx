import React, { useState } from 'react'
import { formateHour } from '../store/orders/slice'
import { useOrdersActions } from '../hooks/useOrdersActions'
import { Product } from '../store/orders/slice'

export const ModalNewOrder = () => {
  const { addOrder } = useOrdersActions()
  const [products, setProducts] = useState<any>([]);

  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)


  const handleProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if(name.trim() !== '') {
      setProducts([
        ...products, {name, quantity}
      ])
      setName('')
      setQuantity(1)
    }
  }

  const handleSubmit = () => {

    addOrder({
      id: crypto.randomUUID(),
      products,
      status: 'active',
      date: formateHour(new Date())
    })

    setProducts([])

  }
  return (
    <div className='mx-auto max-w-xl grid grid-cols-3 gap-4 border border-slate-200 rounded-md mb-28 p-4'>
      <div className='col-span-2'>
        <form action="" onSubmit={handleProduct} className='flex flex-col justify-between gap-3'>
          <div className='flex gap-3'>
            <input
              className='bg-slate-100 py-2 px-3 rounded-md text-lg w-full'
              type="text"
              name='name'
              placeholder='Producto...'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className='bg-slate-100 py-2 px-3 rounded-md text-lg w-20'
              type="number"
              name='quantity'
              min={1}
              placeholder='Cantidad...'
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value) || 1)}
            />
          </div>
          <button className='mb-6 bg-slate-100 border  border-slate-200 p-1 rounded-md hover:bg-slate-200' type='submit'>Add product</button>
        </form>
        <button disabled={products.length !== 0 ? false : true} onClick={handleSubmit} className='disabled:bg-black/70 disabled:cursor-not-allowed bg-black text-white w-full p-2 rounded-lg'>Complete order</button>
      </div>
      <div className='bg-slate-100 p-2 w-full rounded-md'>
        <h3 className='text-lg font-semibold'>List of Products</h3>
        <ul>
          {products.map((product: Product) => (
            <li key={crypto.randomUUID()}>{product.quantity} - {product.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
