import React from 'react'
import { useNavigate } from 'react-router-dom'

function HalamanAwal() {
  const navigate = useNavigate()

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background awan gelap */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/clouds-dark.png')" }}
      />

      {/* Lapisan konten utama */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          Selamat datang di alam perhitungan MPJHD
        </h1>
        <button
          onClick={() => navigate('/step/1')}
          className="bg-white text-black px-8 py-4 text-xl rounded hover:bg-gray-200 transition"
        >
          MULAI
        </button>
      </div>
    </div>
  )
}

export default HalamanAwal
