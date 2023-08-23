import { configureStore } from "@reduxjs/toolkit";

import authApi, { autreducer } from "../api/auth";

const store = configureStore({
	reducer: {
		auth: autreducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});
export default store;
