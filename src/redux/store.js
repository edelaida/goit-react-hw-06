import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { contactsSlice } from "./contactsSlice";
import { filtersSlice } from "./filtersSlice";

const contactsSliceConfig = {
  key: "contact",
  storage,
  whitelist: ["users"],
};

export const store = configureStore({
  reducer: {
    mailbox: persistReducer(contactsSliceConfig, contactsSlice),
    searchfilterSlice: filtersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
