 export interface ContactInterface {
    first_name: string,
    last_name: string,
    email: string,
    gender: string,
    phone: string,
    note: string,
    telegram: string,
    avatar: string,
    company: string,
    address: null,
    createdAt: number,
    updatedAt: number,
    id: number
 }
 


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
