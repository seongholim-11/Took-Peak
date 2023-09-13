import { create } from 'zustand';

const useSearchStore = create((set) => ({
  searchValue: '',
  setSearchValue: (e) => set({ searchValue: e.target.value }),
  searchButton: false,
  setSearchButtonFalse: () => set({ searchButton: false }),
  setSearchButtonTrue: () => set({ searchButton: true }),
  page: '',
  setPage: (value) => set({ page: value }),
}));

export default useSearchStore;

