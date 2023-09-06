import { create } from 'zustand';

const usePageStore = create((set) => ({
  pageValue: 1,
  setPageValue: (e) => set({ pageValue: e }),
}));

export default usePageStore;

