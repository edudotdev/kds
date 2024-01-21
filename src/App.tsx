import { Nav, Footer, ModalNewOrder } from './components'
import { Route, Routes} from 'react-router-dom'
import { Home, Active, Completed, Canceled } from './app'

function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/active' element={<Active />} />
        <Route path='/completed' element={<Completed />} />
        <Route path='/canceled' element={<Canceled />} />
      </Routes>
      <ModalNewOrder />
      <Footer />
    </div>
  )
}

export default App
