// HalamanAwal.jsx
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HalamanAwal = () => {
  const navigate = useNavigate();

  const handleMulai = () => {
    navigate('/step/1');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900 text-white flex flex-col items-center justify-center">
      {/* Animasi awan */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/clouds-dark.png')] bg-cover bg-center opacity-20 animate-clouds" />

      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold z-10 text-center"
      >
        Selamat datang di alam perhitungan MPJHD
      </motion.h1>

      <motion.button
        onClick={handleMulai}
        className="mt-10 px-8 py-4 text-lg md:text-xl font-semibold bg-blue-600 hover:bg-blue-700 rounded-2xl shadow-lg z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        MULAI
      </motion.button>
    </div>
  );
};

export default HalamanAwal;
