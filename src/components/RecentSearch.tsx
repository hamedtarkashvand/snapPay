import { FC } from "react";
import ListItem from "./list/ListItem";
import { ContactInterface } from "../type";

interface RecentSearchProps {
  recentSearch?: ContactInterface[];
}

const RecentSearch: FC<RecentSearchProps> = ({ recentSearch }) => {
  return (
    <div className="p-5   rounded-md shadow-lg border border-slate-200 bg-gray-300/30 backdrop-blur-md">
      {recentSearch?.length ? (
        <ul>
          {recentSearch.map((contact) => (
            <ListItem key={contact.id} {...contact} />
          ))}
        </ul>
      ) : (
        <p className="text-center">You haven't searched for a contact recently.</p>
      )}
    </div>
  );
};

export default RecentSearch;
