import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HalamanAwal from './pages/HalamanAwal'
import Step1 from './pages/Step1'
// import Step2 from './pages/Step2' ← nanti kita buat

function App() {
  return (
    <Routes>
      <Route path="/" element={<HalamanAwal />} />
      <Route path="/step/1" element={<Step1 />} />
      {/* <Route path="/step/2" element={<Step2 />} /> */}
    </Routes>
  )
}


export default App
