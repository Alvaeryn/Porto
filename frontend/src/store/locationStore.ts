import { useSyncExternalStore } from 'react';
import { getLocationState } from '../utils/navigation';

type Listener = () => void;

const listeners = new Set<Listener>();

const subscribe = (listener: Listener) => {
  listeners.add(listener);

  const handleLocationChange = () => {
    listeners.forEach((currentListener) => currentListener());
  };

  window.addEventListener('popstate', handleLocationChange);
  window.addEventListener('hashchange', handleLocationChange);

  return () => {
    listeners.delete(listener);
    window.removeEventListener('popstate', handleLocationChange);
    window.removeEventListener('hashchange', handleLocationChange);
  };
};

const getSnapshot = () =>
  typeof window === 'undefined'
    ? { pathname: '/', hash: '' }
    : getLocationState();

export const useLocationStore = () =>
  useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
