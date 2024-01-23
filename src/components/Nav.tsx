import { Link } from 'react-router-dom'

const paths = [
  {
    url: '/',
    text: 'All'
  },
  {
    url: '/queue',
    text: 'Queue'
  },
  {
    url: '/cooking',
    text: 'Cooking'
  },
  {
    url: '/completed',
    text: 'Completed'
  },
  {
    url: '/canceled',
    text: 'Canceled'
  },
]

export const Nav = () => {

  return (
    <header className='sticky top-0 flex flex-col md:flex-row gap-6 justify-between items-center border-b border-slate-200 p-5 bg-white z-50'>
      <h1 className='text-4xl font-bold'>KDS</h1>
      <nav className='flex gap-3 flex-wrap justify-center'>
        {paths.map(path => (
          <Link  
            key={path.url}
            to={path.url}
            className='hover:bg-slate-100 bg-slate-50 md:bg-transparent rounded-lg text-sm md:text-lg font-semibold text-gray-800 px-2 md:px-3 py-2 text-center transition-colors' 
            >
              {path.text}
          </Link>
        ))}
      </nav>
    </header>
  )
}
