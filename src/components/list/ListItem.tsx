import type { FC } from "react";
import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import { useSelector } from "react-redux";
import { TypeRootState } from "../../store";
import Badge from "../Badge";
import { IoCallOutline } from "react-icons/io5";
import { ContactInterface } from "../../type";

interface ListItemProps extends ContactInterface {
  style?: React.CSSProperties;
}

const ListItem: FC<ListItemProps> = ({
  first_name,
  last_name,
  phone,
  avatar,
  style,
  id,
}) => {
  const { resentIds } = useSelector(
    (state: TypeRootState) => state.stateRecentContract
  );
  return (
    <Link to={`details/${id}`} style={style} key={id}>
      <div className="pb-4 group/item hover:bg-slate-100 rounded-md p-3">
        <div className="flex items-center space-x-4 ">
          <div className="flex-shrink-0">
            <Avatar src={avatar} firstName={first_name} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900 truncate ">
              {first_name}
            </p>
            <p className="text-sm text-gray-500 truncate ">{last_name}</p>
          </div>
          <div
            className=" inline-flex items-center text-sm font-semibold "
          >
            <Badge icon={IoCallOutline} textContent={phone} isActive={resentIds.includes(id)} />
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ListItem;
