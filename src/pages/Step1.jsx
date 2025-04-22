import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useMPJHDStore from '../store/mpjhdStore'

const kewajibanList = [
  { label: "Setia dan taat kepada Pancasila, UUD 1945, Negara Kesatuan Republik Indonesia, dan Pemerintah yang sah", pasal: "Pasal 3 ayat (1)" },
  { label: "Menjaga persatuan dan kesatuan bangsa", pasal: "Pasal 3 ayat (2)" },
  { label: "Melaksanakan kebijakan yang ditetapkan oleh pejabat yang berwenang", pasal: "Pasal 3 ayat (3)" },
  { label: "Melaksanakan tugas kedinasan dengan pengabdian, kejujuran, kesadaran, dan tanggung jawab", pasal: "Pasal 3 ayat (4)" },
  { label: "Menunjukkan integritas dan keteladanan dalam sikap, perilaku, ucapan, dan tindakan kepada setiap orang", pasal: "Pasal 3 ayat (5)" },
  { label: "Mengutamakan kepentingan negara daripada kepentingan pribadi atau golongan", pasal: "Pasal 3 ayat (6)" },
  { label: "Menggunakan dan memelihara barang milik negara dengan sebaik-baiknya", pasal: "Pasal 3 ayat (7)" },
  { label: "Memberikan pelayanan sebaik-baiknya kepada masyarakat", pasal: "Pasal 3 ayat (8)" },
  { label: "Bekerja dengan jujur, tertib, cermat, dan bersemangat untuk kepentingan negara", pasal: "Pasal 3 ayat (9)" },
  { label: "Menaati ketentuan jam kerja", pasal: "Pasal 3 ayat (10)" },
  { label: "Menggunakan pakaian dinas atau atribut sesuai ketentuan yang berlaku", pasal: "Pasal 3 ayat (11)" },
  { label: "Menyampaikan laporan harta kekayaan sesuai dengan ketentuan peraturan perundang-undangan", pasal: "Pasal 4 huruf a" },
  { label: "Memberikan informasi yang benar dan tidak menyesatkan dalam proses pemeriksaan", pasal: "Pasal 4 huruf b" },
  { label: "Menyampaikan laporan atas pelanggaran yang diketahui kepada atasan langsung, pejabat berwenang, atau instansi yang berwenang", pasal: "Pasal 4 huruf c" },
  { label: "Menyampaikan laporan tentang perkawinan, perceraian, dan perubahan status keluarga kepada pejabat yang berwenang", pasal: "Pasal 4 huruf d" },
  { label: "Menaati perintah atasan yang sah sesuai ketentuan peraturan perundang-undangan", pasal: "Pasal 4 huruf e" },
]

const laranganList = [
  { label: "Menyalahgunakan wewenang", pasal: "Pasal 5 huruf a" },
  { label: "Menjadi perantara untuk mendapatkan keuntungan pribadi dan/atau orang lain dengan menggunakan kewenangan orang lain", pasal: "Pasal 5 huruf b" },
  { label: "Bertindak sewenang-wenang terhadap bawahan", pasal: "Pasal 5 huruf c" },
  { label: "Menghalangi berjalannya tugas kedinasan", pasal: "Pasal 5 huruf d" },
  { label: "Menerima hadiah yang berhubungan dengan jabatan dan/atau pekerjaan", pasal: "Pasal 5 huruf e" },
  { label: "Melakukan tindakan yang merugikan negara", pasal: "Pasal 5 huruf f" },
  { label: "Melakukan kegiatan yang merugikan instansi", pasal: "Pasal 5 huruf g" },
  { label: "Membocorkan informasi yang harus dirahasiakan sesuai ketentuan peraturan perundang-undangan", pasal: "Pasal 5 huruf h" },
  { label: "Menjadi anggota dan/atau pengurus partai politik", pasal: "Pasal 5 huruf i" },
  { label: "Melakukan pungutan tidak sah dalam bentuk apa pun", pasal: "Pasal 5 huruf j" },
  { label: "Melakukan perbuatan yang bertentangan dengan norma agama, norma kesusilaan, dan norma sosial", pasal: "Pasal 5 huruf k" },
  { label: "Bekerja pada perusahaan asing, konsultan asing, atau lembaga swadaya masyarakat asing tanpa izin pemerintah", pasal: "Pasal 5 huruf l" },
]

function Step1() {
  const [kategori, setKategori] = useState(null)
  const { setPilihanPasal } = useMPJHDStore()
  const navigate = useNavigate()

  const handlePilihPasal = (item) => {
    setPilihanPasal(item)
    navigate('/step/2')
  }

  return (
    <div className="min-h-screen px-4 py-10 text-white bg-black flex flex-col items-center">
      <div className="max-w-xl text-center mb-10">
        <p className="mb-4 text-lg leading-relaxed">
          Di alam ini, pantang menyebut nama <strong>Terlapor</strong>!<br />
          Namun, demi kemudahan, sesuatu harus dijadikan tumbal!<br />
          Maka dari itu, kita sebut saja tumbal tersebut adalah <strong>Babi</strong>!
        </p>
        <h2 className="text-2xl font-bold mt-6">Sebutkan! apa perbuatan yang dilakukan oleh Babi!</h2>
      </div>

      {!kategori && (
        <div className="flex gap-6 flex-wrap justify-center">
          <button
            onClick={() => setKategori('kewajiban')}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded text-lg"
          >
            Melanggar KEWAJIBAN
          </button>
          <button
            onClick={() => setKategori('larangan')}
            className="bg-red-600 hover:bg-red-700 px-6 py-4 rounded text-lg"
          >
            Melakukan LARANGAN
          </button>
        </div>
      )}

      {kategori && (
        <div className="mt-8 space-y-4 w-full max-w-3xl">
          {(kategori === 'kewajiban' ? kewajibanList : laranganList).map((item, i) => (
            <button
              key={i}
              onClick={() => handlePilihPasal(item)}
              className={`w-full text-left ${
                kategori === 'kewajiban' ? 'bg-blue-900 hover:bg-blue-800' : 'bg-red-900 hover:bg-red-800'
              } py-3 px-6 rounded-md text-sm tracking-wide`}
            >
              {item.label}
              <span className="block text-xs mt-1 opacity-70">{item.pasal}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Step1
