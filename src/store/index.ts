import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "./rootReducer"
import api from "./api"

const store = configureStore({
  reducer: { rootReducer, [api.reducerPath]: api.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export default store
