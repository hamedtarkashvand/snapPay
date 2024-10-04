import { useState, useEffect } from "react";
import { useSearchContactQuery } from "../services/contacts/apiContacts";
import useDebounce from "./useDebounce";
import useDebouncedCallback from "./useDebouncedCallback";
import { ContactInterface } from "../type";

interface UseContactsProps {
  initialQuery?: string;
}

const useContacts = ({ initialQuery = "" }: UseContactsProps) => {
  const [searchTerm, setSearchTerm] = useState<string>(initialQuery);
  const [skip, setSkip] = useState<number>(0);
  const [allContacts, setAllContacts] = useState<ContactInterface[]>([]);
  const debouncedQuery = useDebounce<string>(searchTerm, 1000);
  const { data, isLoading, error   } = useSearchContactQuery({ searchTerm: debouncedQuery, skip });

  const refreshContactList = ()=>{
    setAllContacts([]); 
    setSkip(0);
  }
  const delayedRefreshContacts  = useDebouncedCallback(refreshContactList,1000)
  
  const handleSearch = (newQuery: string) => {
    setSearchTerm(newQuery);
    delayedRefreshContacts()
  };

  const handlerFetchMoreContacts = async (): Promise<any> => {
    if (!isLoading && (data?.meta?.total || 0) > allContacts.length) {
      setSkip((prevSkip) => prevSkip + 10);
    }
  };

  useEffect(() => {
    if (data?.items && skip ) {      
      setAllContacts((prevContacts) => [...prevContacts, ...data.items]);
    } else  {
      
      setAllContacts((prevContacts) => data?.items as ContactInterface[]);

    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return {
    searchTerm,
    allContacts,
    handleSearch,
    handlerFetchMoreContacts,
    isLoading,
    error,
    totalContacts: data?.meta?.total || 0,
  };
};

export default useContacts;
