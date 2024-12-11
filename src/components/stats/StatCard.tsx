import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number;
  Icon: LucideIcon;
  color: string;
}

export default function StatCard({ title, value, Icon, color }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center space-x-2">
        <Icon className={`h-6 w-6 text-${color}`} />
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <p className={`text-2xl font-bold text-${color} mt-2`}>
        {value.toLocaleString()}
      </p>
    </div>
  );
}