import { smoothScrollTo } from './scroll';

export const getLocationState = () => ({
  pathname: window.location.pathname,
  hash: window.location.hash,
});

export const navigateTo = (target: string) => {
  const current = `${window.location.pathname}${window.location.hash}`;

  if (current === target) {
    return;
  }

  window.history.pushState({}, '', target);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export const navigateToSection = (hash: string) => {
  if (window.location.pathname === '/') {
    smoothScrollTo(hash);
    return;
  }

  navigateTo(`/${hash}`);
};
