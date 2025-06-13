
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import ListaPosts from './pages/ListaPosts'
import AppLayout from './components/AppLayout'
import ShowPost from './pages/ShowPost'




function App() {

  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/home" element={<Home />} />{ }
            <Route path="/chisiamo" element={<ChiSiamo />} />
            <Route path="/ListaPosts" element={<ListaPosts />} />
            <Route path=":id" element={<ShowPost/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
