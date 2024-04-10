import { create } from 'zustand';

interface State {
    getTotalItems: any;
    isSideMenuOpen: boolean;
    openSideMenu: () => void;
    closeSideMenu: () => void;
}

export const useUIStore = create<State>((set) => ({
 isSideMenuOpen: false,
 openSideMenu: () => set({ isSideMenuOpen: true }),
 closeSideMenu: () => set({ isSideMenuOpen: false }),
}))