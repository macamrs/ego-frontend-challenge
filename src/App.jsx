import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Main from './pages/Main/Main'
import Ficha from './pages/Ficha/Ficha'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' exact element={<Main />} />
          <Route path='/:id' exact element={<Ficha />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
