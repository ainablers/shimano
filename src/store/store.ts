import { CurrentView } from "../types/camera";
import { create } from "zustand";
import { Parts } from "types/parts";

type ShimanoStoreState = {
  currentView: CurrentView;
  setCurrentView: (view: CurrentView) => void;
  activePart: Parts;
  setActivePart: (view: Parts) => void;
};

export const useShimanoStore = create<ShimanoStoreState>((set) => ({
  currentView: CurrentView.WELCOME_SCREEN,
  setCurrentView: (view) => set({ currentView: view }),
  activePart: null,
  setActivePart: (part) => set({ activePart: part }),
}));
