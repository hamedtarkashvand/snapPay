import { useState } from "react";
import Search from "./componrnts/input/Search";
import { useSearchContactQuery } from "./services/contacts/apiContacts";
import RecentSearch from "./componrnts/RecentSearch";

function App() {
  const { isLoading, data } = useSearchContactQuery({
    query: "",
  });
  const [query, setQuery] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="App h-screen w-full bg-rose-300 flex flex-col justify-center">
      <header className="App-header">
        <div
          className="container mx-auto  bg-white max-w-md p-3 rounded-md"
        >
          <Search
            placeholder="search name Or first name contact"
            value={query}
            // onFocusHandler={() => {
            //   setOpen(true);
            // }}
            onChangeHandler={(e) => {
              const inputValue = e.target.value.trim();
              setQuery(inputValue);
            }}
            renderRecentSearch={()=>(
              <RecentSearch recentSearch={[]} />
            )}
          />    
        </div>
      </header>
    </div>
  );
}

export default App;
