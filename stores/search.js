import { create } from 'zustand';

const useSearchStore = create((set) => ({
  searchValue: '',
  setSearchValue: (e) => set({ searchValue: e.target.value }),
  searchButton: false,
  setSearchButtonFalse: () => set({ searchButton: false }),
  setSearchButtonTrue: () => set({ searchButton: true }),
}));

export default useSearchStore;
