import { useSyncExternalStore } from 'react';

type Listener = () => void;

interface ThemeState {
  darkMode: boolean;
}

const listeners = new Set<Listener>();

const getInitialDarkMode = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  const savedTheme = window.localStorage.getItem('darkMode');
  return savedTheme ? JSON.parse(savedTheme) : false;
};

let themeState: ThemeState = {
  darkMode: getInitialDarkMode(),
};

const emitChange = () => {
  listeners.forEach((listener) => listener());
};

const applyThemeToDocument = (darkMode: boolean) => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', darkMode);
  }

  if (typeof window !== 'undefined') {
    window.localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }
};

applyThemeToDocument(themeState.darkMode);

const subscribe = (listener: Listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const getSnapshot = () => themeState;

export const setDarkMode = (darkMode: boolean) => {
  themeState = { darkMode };
  applyThemeToDocument(darkMode);
  emitChange();
};

export const toggleDarkMode = () => {
  setDarkMode(!themeState.darkMode);
};

export const useThemeStore = () => {
  const state = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  return {
    darkMode: state.darkMode,
    setDarkMode,
    toggleDarkMode,
  };
};
