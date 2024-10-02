import { FC } from "react";
import { ContactInterface } from "../services/contacts/types";

interface RecentSearchProps {
  recentSearch?: ContactInterface[];
}

const RecentSearch: FC<RecentSearchProps> = ({ recentSearch }) => {
  return (
    <div className="p-5  min-h-60 rounded-md shadow-lg border border-slate-200 bg-white">
      {recentSearch?.length ? (
        <ul>
          {recentSearch.map((contact) => (
            <li key={contact.id}>{contact.first_name}</li>
          ))}
        </ul>
      ) : (
        <p>No recent searches</p>
      )}
    </div>
  );
};

export default RecentSearch;
