import axios from "axios";
export const inst = axios.create({
	baseURL: "http://localhost:3000/products",
});
