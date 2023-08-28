import { create } from 'zustand';

const useSearchStore = create((set) => ({
  searchValue: '',
  setSearchValue: (e) => set({ searchValue: e.target.value }),
  searchButton: false,
  setSearchButtonFalse: () => set({ searchButton: false }),
  setSearchButtonTrue: (searchButton) => set({ searchButton: !searchButton }),
}));

export default useSearchStore;

