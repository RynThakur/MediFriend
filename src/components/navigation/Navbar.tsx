import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHeartbeat } from 'react-icons/fa';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import { navItems } from './navItems';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  const navItemsWithActive = navItems.map(item => ({
    ...item,
    isActive: isActive(item.to),
  }));

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <FaHeartbeat className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">MediFriend</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navItemsWithActive.map((item) => (
                <NavLink key={item.to} {...item} />
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        navItems={navItemsWithActive}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}