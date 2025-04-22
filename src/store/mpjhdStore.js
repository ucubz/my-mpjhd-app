import { create } from 'zustand'

const useMPJHDStore = create((set) => ({
  pilihanPasal: null,
  setPilihanPasal: (data) => set({ pilihanPasal: data }),

  // Tambahkan state lain di sini kalau perlu
}))

export default useMPJHDStore
