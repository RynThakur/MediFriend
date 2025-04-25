import { IconType } from 'react-icons';
import NavLink from '/Users/aryanthakur/Desktop/Covid/src/components/navigation/NavLink.tsx';

interface MobileMenuProps {
  isOpen: boolean;
  navItems: Array<{
    to: string;
    icon: IconType;
    label: string;
    isActive: boolean;
  }>;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, navItems, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-50 bg-gray-900 bg-opacity-50">
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              {...item}
              onClick={onClose}
            />
          ))}
        </nav>
      </div>
    </div>
  );
}