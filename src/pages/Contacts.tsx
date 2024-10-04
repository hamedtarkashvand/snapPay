import Search from "../components/input/InputSearch";
import RecentSearch from "../components/RecentSearch";
import ListVirtualized from "../components/list/ListVirtualized";
import { useSelector } from "react-redux";
import { TypeRootState } from "../store";
import useContacts from "../hooks/useContacts";

const Contacts = () => {
  const { recentSearch } = useSelector(
    (state: TypeRootState) => state.stateRecentContract
  );
  const {
    allContacts,
    handleSearch,
    handlerFetchMoreContacts,
    totalContacts,
    isLoading,
    searchTerm,
    
  } = useContacts({
    initialQuery: "",
  });

  return (
    <div className="flex flex-col gap-5 h-full">
      <Search
        placeholder="search name Or first name contact "
        value={searchTerm}
        onChangeHandler={(e) => handleSearch(e.target.value)}
        renderRecentSearch={() => <RecentSearch recentSearch={recentSearch} />}
      />
      <ListVirtualized
        loading={isLoading}
        contacts={allContacts}
        totalContacts={totalContacts}
        fetchMoreContacts={(params) =>handlerFetchMoreContacts()}
      />
    </div>
  );
};
export default Contacts;
