import { create } from 'zustand'

interface GraphStore {
  activePath: string[];
  navigateTo: (id: string) => void;
  navigateToIndex: (index: number) => void;
}

export const useGraphStore = create<GraphStore>((set) => ({
  activePath: ['root'],
  navigateTo: (id) => set((state) => ({ activePath: [...state.activePath, id] })),
  navigateToIndex: (index) => set((state) => ({ activePath: state.activePath.slice(0, index + 1) })),
}))
