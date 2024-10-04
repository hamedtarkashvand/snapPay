import { fetchBaseQuery } from "../api";
import { createApi } from "@reduxjs/toolkit/query/react";
import { SearchContactRequest, SearchContactResponse, SearchDetailsContactRequest, SearchDetailsContactResponse } from "./types";

type CreateBaseQueryType = SearchContactRequest
const createBaseQuery = (params:CreateBaseQueryType)=>{  
    const {searchTerm ,limit = 15,skip=0} = params
    const normalizeQuery = searchTerm.trim()
    const isMobile = /^\d+$/.test(normalizeQuery);
    return {
        url: "/passenger",
        method: "GET",
        params: {
          where: {
            first_name: {
              contains: isMobile ? '' : normalizeQuery  ,
            },
            phone: {
              contains: isMobile ? normalizeQuery : '' ,
            },
          },
          sort: "createdAt DESC",
          limit,
          skip,
        },
      };
}

export const createContactService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    searchContact: builder.query<SearchContactResponse, SearchContactRequest>({
      query: (query) => createBaseQuery(query),
      // keepUnusedDataFor:0
    }),
    contactDetail:builder.query<SearchDetailsContactResponse, SearchDetailsContactRequest>({
        query:({id})=>({
            method:'GET',
            url:`/passenger/${id}`
        })
    })
  }),
});


export const { useContactDetailQuery ,useSearchContactQuery , useLazySearchContactQuery} = createContactService
