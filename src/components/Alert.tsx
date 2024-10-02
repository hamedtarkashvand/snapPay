import type { FC } from "react";
import { IoIosArrowForward } from "react-icons/io";
type BadgeType = "NotFound" | "Warning" | "New";

interface AlertPropsInterface {
  contentTest: string;
  badgeText: BadgeType;
}

const Alert: FC<AlertPropsInterface> = ({ badgeText, contentTest }) => {
  return (
    <div
      className="p-2 bg-blue-800 items-center text-indigo-100 leading-none  flex rounded-md"
      role="alert"
    >
      <span className="flex rounded-full bg-blue-500 uppercase px-2 py-1 text-xs font-bold mr-3">
        {badgeText}
      </span>
      <span className="font-semibold text-sm mr-2 text-left flex-auto">
        {contentTest}
      </span>
      <IoIosArrowForward className="fill-current opacity-75 h-4 w-4" />
    </div>
  );
};
export default Alert;
