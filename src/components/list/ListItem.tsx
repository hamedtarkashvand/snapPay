import type { FC } from "react";
import { ContactInterface } from "../../services/contacts/types";

interface ListItemProps extends ContactInterface {}

const ListItem: FC<ListItemProps> = ({
  first_name,
  last_name,
  phone,
  avatar,
  id,
  createdAt,
}) => {
  return (
    <li
      id={`item${id}`}
      className="pb-4 group/item hover:bg-slate-100 rounded-md p-3"
    >
      <div className="flex items-center space-x-4 ">
        <div className="flex-shrink-0">
          {avatar ? (
            <img
              className="w-16 h-16 rounded-full"
              src={avatar}
              alt={first_name}
            />
          ) : (
            <div className="relative inline-flex items-center justify-center w-16 h-16 overflow-hidden bg-gray-100 rounded-full ">
              <span className="font-medium text-gray-600 dark:text-gray-300">
                {first_name.slice(0, 2).toUpperCase()}
              </span>
            </div>
          )}
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900 truncate ">
            {first_name}
          </p>
          <p className="text-sm text-gray-500 truncate ">{phone}</p>
        </div>
        <div className="inline-flex items-center text-sm font-semibold text-gray-300 ">
          {phone}
        </div>
      </div>
    </li>
  );
};
export default ListItem;
