import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  onToggle: () => void;
  onOpen: () => void;
  onClose: () => void;
}

export const useModal = create<ModalState>((set) => ({
  isOpen: false,

  onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
