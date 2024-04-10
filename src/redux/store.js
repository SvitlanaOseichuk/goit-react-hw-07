import { configureStore } from "@reduxjs/toolkit";
import { contactDetailsReducer } from "./contactsSlice";
import { filterDetailsReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contactDetails: contactDetailsReducer,
    filterDetails: filterDetailsReducer
  },
});

