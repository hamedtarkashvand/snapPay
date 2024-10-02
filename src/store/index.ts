import { configureStore} from "@reduxjs/toolkit";
import { createContactService } from "../services/contacts/apiContacts";
import sliceRecentContact from "./sliceRecentContact";

export const store = configureStore({
    reducer:{
        stateRecentContract: sliceRecentContact.reducer,
        [createContactService.reducerPath]: createContactService.reducer,
    },
     middleware: (getDefaultMiddleware)=> {
       return getDefaultMiddleware().concat([
            createContactService.middleware
        ])
    },
})

export type TypeRootState = ReturnType<typeof store.getState>