import { FC } from "react";
import { ContactInterface } from "../services/contacts/types";
import ListItem from "./list/ListItem";
import ListNotFound from "./list/ItemNotFound";

interface RecentSearchProps {
  recentSearch?: ContactInterface[];
}

const RecentSearch: FC<RecentSearchProps> = ({ recentSearch }) => {
  return (
    <div className="p-5   rounded-md shadow-lg border border-slate-200 bg-white">
      {recentSearch?.length ? (
        <ul>
          {recentSearch.map((contact) => (
            <ListItem key={contact.id} {...contact}  />
          ))}
        </ul>
      ) : (
        <ListNotFound contentTest={"You haven't searched for a contact recently."} badgeText={"NotFound"} />
      )}
    </div>
  );
};

export default RecentSearch;
