
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import ListaPosts from './pages/ListaPosts'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/chisiamo" element={<ChiSiamo/>} />
            <Route path="/ListaPosts" element={<ListaPosts/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
