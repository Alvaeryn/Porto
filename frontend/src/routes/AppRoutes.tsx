import { useLocationStore } from '../store/locationStore';
import HomePage from '../pages/HomePage';
import FAQPage from '../pages/FAQPage';

interface AppRoutesProps {
  darkMode: boolean;
}

const AppRoutes = ({ darkMode }: AppRoutesProps) => {
  const { pathname } = useLocationStore();

  if (pathname === '/faq') {
    return <FAQPage darkMode={darkMode} />;
  }

  return <HomePage />;
};

export default AppRoutes;
