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
   item: ContactInterface[];
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
    query:string
 }

 export interface SearchContactResponse extends RootResponse {
    items:ContactInterface[]
 }


