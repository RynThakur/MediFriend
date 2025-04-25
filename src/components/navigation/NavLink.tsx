import { Link } from 'react-router-dom';
import { IconType } from 'react-icons';

interface NavLinkProps {
  to: string;
  icon: IconType;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

export default function NavLink({ to, icon: Icon, label, isActive, onClick }: NavLinkProps) {
  const baseClasses = "flex items-center space-x-1 transition-colors duration-200";
  const activeClasses = isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600";

  return (
    <Link
      to={to}
      className={`${baseClasses} ${activeClasses}`}
      onClick={onClick}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );
}