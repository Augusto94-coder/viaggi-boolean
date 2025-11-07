import './App.css'
import Layout from "./layout/Layout"
import HomePage from './pages/HomePage'
import ViaggioDettagli from './pages/ViaggioDettagli'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/viaggio/:id" element={<ViaggioDettagli />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
