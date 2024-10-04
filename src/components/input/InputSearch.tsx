import { useRef, useState, type ChangeEventHandler, type FC } from "react";
import { TbInputSearch } from "react-icons/tb";

import "./searchStyle.css";
import useClickOutside from "../../hooks/useClickOutside";

interface SearchProps {
  isLoading?: boolean;
  value: string;
  placeholder?: string;
  renderRecentSearch?: () => JSX.Element;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const Search: FC<SearchProps> = ({
  value,
  onChangeHandler,
  placeholder,
  renderRecentSearch,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const refInputSearch = useRef(null);

  useClickOutside(refInputSearch, () => {
    setOpen(false);
  });

  return (
    <div ref={refInputSearch} id="InputSearch" className="relative">
      <label className="relative block">
        <span className="sr-only">Search</span>
        <input
          name="search"
          type="text"
          className="search_input peer"
          value={value}
          placeholder={placeholder}
          onChange={(e) => {
            onChangeHandler(e);
            setOpen(e.target.value.trim().length === 0);
          }}
          onFocus={() => setOpen(true)}
        />
        <span className="absolute inset-y-0 left-0 flex items-center text-slate-300 peer-focus:text-blue-700 justify-center pl-2">
          <TbInputSearch className="text-lg" />
        </span>
      </label>
      <div className="absolute z-10  top-[50px] left-0 right-0">
        {open &&
          value.trim().length === 0 &&
          renderRecentSearch &&
          renderRecentSearch()}
      </div>
    </div>
  );
};
export default Search;
