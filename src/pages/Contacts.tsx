import { useState, type FC } from "react";
import Search from "../components/input/InputSearch";
import { useSearchContactQuery } from "../services/contacts/apiContacts";
import useDebounce from "../hooks/useDebounce";
import RecentSearch from "../components/RecentSearch";
import ListVirtualized from "../components/list/ListVirtualized";
import { useSelector } from "react-redux";
import { TypeRootState } from "../store";

interface contactProps {}

const Contacts: FC<contactProps> = ({}) => {
  const [query, setQuery] = useState<string>("");
  const { recentSearch }= useSelector((state:TypeRootState)=>state.stateRecentContract)
  const { isLoading, data } = useSearchContactQuery({
    query: useDebounce(query, 1000),
  });

  return (
    <div className="flex flex-col gap-5  h-full">
      <Search
        placeholder="search name Or first name contact "
        value={query}
        onChangeHandler={(e) => {
          const inputValue = e.target.value.trim();
          setQuery(inputValue);
        }}
        renderRecentSearch={() => <RecentSearch recentSearch={recentSearch} />}
      />
      {data && (
        <ListVirtualized
          contacts={data.items}
          totalContacts={100}
          fetchMoreContacts={(params) => {
            console.log(params);
            return Promise.resolve();
          }}
        />
      )}
    </div>
  );
};
export default Contacts;
