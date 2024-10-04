import { ContactInterface } from "../../type";

export interface RootResponse {
   meta: {
     skipped: number;
     limit: number;
     total: number;
     criteria: object;
   };
   items: ContactInterface[];
 }

 export interface RootRequest  {
   first_name: {
    contains: string;
   };
   phone: {
     contains: string;
   };
   sort: "createdAt" | "DESC";
   limit: number;
 };
  

 export interface SearchContactRequest {
   searchTerm: string;
   limit?: number;
   skip?: number;
 }

 export interface SearchContactResponse extends RootResponse {
    items:ContactInterface[]
 }
  export interface SearchDetailsContactRequest {
    id:string | number
 }


 export type SearchDetailsContactResponse = ContactInterface 
