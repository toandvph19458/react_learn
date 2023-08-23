import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const authApi = createApi({
	reducerPath: "auth",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:3000",
	}),
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (user) => ({
				url: "/login",
				method: "POST",
				body: user,
			}),
		}),
		signup: builder.mutation({
			query: (user) => ({
				url: "/signup",
				method: "POST",
				body: user,
			}),
		}),
	}),
});
export default authApi;
export const autreducer = authApi.reducer;
export const { useSignupMutation, useLoginMutation } = authApi;
