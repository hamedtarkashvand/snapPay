import { useState } from "react";
import Search from "./components/input/InputSearch";
import { useSearchContactQuery } from "./services/contacts/apiContacts";
import RecentSearch from "./components/RecentSearch";
import useDebounce from "./hooks/useDebounce";
import List from "./components/list/List";

function App() {
  const [query, setQuery] = useState<string>("");
  const { isLoading, data } = useSearchContactQuery({
    query: useDebounce(query, 1000),
  });

  return (
    <div className="App w-full h-screen bg-rose-300 flex flex-col py-7 justify-start overflow-hidden">
      <div className="container mx-auto bg-white max-w-md p-3 shadow-xl rounded-md flex flex-col gap-5 grow h-full">
        <Search
          placeholder="search name Or first name contact "
          value={query}
          onChangeHandler={(e) => {
            const inputValue = e.target.value.trim();
            setQuery(inputValue);
          }}
          renderRecentSearch={() => <RecentSearch recentSearch={[]} />}
        />
        <List contacts={data?.items} />
      </div>
    </div>
  );
}

export default App;
