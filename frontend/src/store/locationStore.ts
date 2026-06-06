import { useSyncExternalStore } from 'react';

type Listener = () => void;
type LocationState = { pathname: string; hash: string };

const listeners = new Set<Listener>();

let state: LocationState =
  typeof window === 'undefined' ? { pathname: '/', hash: '' } : {
    pathname: window.location.pathname,
    hash: window.location.hash,
  };

export const updateState = () => {
  const newState = {
    pathname: window.location.pathname,
    hash: window.location.hash,
  };
  if (newState.pathname !== state.pathname || newState.hash !== state.hash) {
    state = newState;
    listeners.forEach((listener) => listener());
  }
};

const subscribe = (listener: Listener) => {
  listeners.add(listener);

  window.addEventListener('popstate', updateState);
  window.addEventListener('hashchange', updateState);

  return () => {
    listeners.delete(listener);
    window.removeEventListener('popstate', updateState);
    window.removeEventListener('hashchange', updateState);
  };
};

const getSnapshot = () => state;

export const useLocationStore = () =>
  useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
