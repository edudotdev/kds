import { Nav, Footer } from './components'
import { Route, Routes} from 'react-router-dom'
import { Home, Cooking, Completed, Canceled, Queue } from './app'

function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/queue' element={<Queue />} />
        <Route path='/cooking' element={<Cooking />} />
        <Route path='/completed' element={<Completed />} />
        <Route path='/canceled' element={<Canceled />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
