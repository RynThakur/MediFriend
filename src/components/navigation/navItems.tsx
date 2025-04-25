import { FaHeartbeat, FaHistory, FaHome, FaVirus, FaGlobe } from 'react-icons/fa';

export const navItems = [
  {
    to: '/',
    icon: FaHome,
    label: 'Home',
  },
  {
    to: '/vitals/check',
    icon: FaHeartbeat,
    label: 'Check Vitals',
  },
  {
    to: '/vitals/covid',
    icon: FaVirus,
    label: 'COVID-19',
  },
  {
    to: '/vitals/history',
    icon: FaHistory,
    label: 'History',
  },
  {
    to: '/global',
    icon: FaGlobe,
    label: 'Global Stats',
  },
];