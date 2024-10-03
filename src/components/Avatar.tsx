import type { FC } from "react";

interface AvatarProps {
  src: string | undefined;
  firstName: string | undefined;
}

const Avatar: FC<AvatarProps> = ({ src, firstName = 'PIC' }) => {
  if (!src)
    return (
      <div className="relative inline-flex items-center justify-center w-16 h-16 overflow-hidden bg-gray-100 rounded-full ">
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {firstName.slice(0, 2).toUpperCase()}
        </span>
      </div>
    );

  return <img className="w-16 h-16 rounded-full" src={src} alt={firstName} />;
};
export default Avatar;
