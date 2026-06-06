import { useSyncExternalStore } from 'react';

type Listener = () => void;

interface UIState {
  isMobileMenuOpen: boolean;
  isWhatsAppOpen: boolean;
}

const listeners = new Set<Listener>();

let uiState: UIState = {
  isMobileMenuOpen: false,
  isWhatsAppOpen: false,
};

const emitChange = () => {
  listeners.forEach((listener) => listener());
};

const subscribe = (listener: Listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const getSnapshot = () => uiState;

const setUIState = (nextState: Partial<UIState>) => {
  uiState = { ...uiState, ...nextState };
  emitChange();
};

export const setMobileMenuOpen = (isMobileMenuOpen: boolean) => {
  setUIState({ isMobileMenuOpen });
};

export const toggleMobileMenu = () => {
  setUIState({ isMobileMenuOpen: !uiState.isMobileMenuOpen });
};

export const closeMobileMenu = () => {
  setUIState({ isMobileMenuOpen: false });
};

export const setWhatsAppOpen = (isWhatsAppOpen: boolean) => {
  setUIState({ isWhatsAppOpen });
};

export const toggleWhatsAppOpen = () => {
  setUIState({ isWhatsAppOpen: !uiState.isWhatsAppOpen });
};

export const closeWhatsAppOpen = () => {
  setUIState({ isWhatsAppOpen: false });
};

export const useUIStore = () => {
  const state = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  return {
    isMobileMenuOpen: state.isMobileMenuOpen,
    isWhatsAppOpen: state.isWhatsAppOpen,
    setMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    setWhatsAppOpen,
    toggleWhatsAppOpen,
    closeWhatsAppOpen,
  };
};
