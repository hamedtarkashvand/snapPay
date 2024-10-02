import { fetchBaseQuery } from "../api";
import { createApi } from "@reduxjs/toolkit/query/react";
import { SearchContactRequest, SearchContactResponse } from "./types";

const createBaseQuery = (query:string)=>{
    const normalizeQuery = query.trim()
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
          limit: 30,
        },
      };
}

export const createContactService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    searchContact: builder.query<SearchContactResponse, SearchContactRequest>({
      query: ({ query }) => createBaseQuery(query)
    }),
    contactDetail:builder.query<SearchContactResponse, SearchContactRequest>({
        query:({query})=>({
            method:'GET',
            url:`/passenger/${query}`
        })
    })
  }),
});


export const { useContactDetailQuery ,useSearchContactQuery} = createContactService
