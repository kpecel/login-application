import { createStore } from "zustand";

const useStore = createStore((set) => ({
  data: { firstName: "", lastName: "", role: "" },

  updateUserDetails: (details) =>
    set((state) => ({ data: { details, ...state.data } })),
}));

export default useStore;
