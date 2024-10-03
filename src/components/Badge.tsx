import type { FC, ReactNode } from "react";
import { IconType } from "react-icons";

interface BadgeProps {
  textContent?: string;
  icon?: IconType;

  isActive?: boolean;
}

const Badge: FC<BadgeProps> = ({ icon: Icon, textContent, isActive }) => {
  return (
    <span
      className={`
        ${
          isActive
            ? "bg-blue-100 border-blue-700"
            : "bg-slate-100 border-slate-300 "
        }
         text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded  border `}
    >
      {Icon && <Icon className="mr-2" />}
      {textContent}
    </span>
  );
};
export default Badge;
