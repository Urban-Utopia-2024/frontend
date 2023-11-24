import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost/",
  }),
  endpoints: (build) => ({
    user: build.query({
      query({ token }) {
        return {
          url: "api/user/",
          headers: { Authorization: `Token ${token}` },
        }
      },
    }),
  }),
})

export const { useUserQuery } = api

export default api
