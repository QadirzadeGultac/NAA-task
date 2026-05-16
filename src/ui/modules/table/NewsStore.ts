import { create } from "zustand";
import type { TModalActions, TModalState } from "./TAddUpdate";

const initialState: TModalState = {
  title: null,
  id: "",
  isDeleteModalOpen: false,
  isSuccessModalOpen: false,
  isAddModalOpen: false,
};

export const useNewsStore = create<
  TModalState & TModalActions
>((set) => ({
  ...initialState,
  setTitle: (val: string | null) => set({ title: val }),
  setId: (val: string | null) => set({ id: val }),
  setIsDeleteModalOpen: (val: boolean) => set({ isDeleteModalOpen: val }),
  setIsSuccessModalOpen: (val: boolean) => set({ isSuccessModalOpen: val }),
  setIsAddModalOpen: (val: boolean) => set({isAddModalOpen: val}),
}));
