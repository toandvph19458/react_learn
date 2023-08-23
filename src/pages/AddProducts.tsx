import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import axios from "axios";

import { inst } from "../api/insctunce";
const Demo: React.FC = () => {
	const productSchema = Yup.object({
		name: Yup.string().trim().required("ban chua nhap"),
		price: Yup.number().required("ban chua nhap"),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(productSchema),
	});
	const onHandle = (value) => {
		console.log(value);
		inst.post("/", value).then((response) => {
			console.log("oke");
		});
	};
	return (
		<>
			<form onSubmit={handleSubmit(onHandle)}>
				<div className="form-group">
					<label>name</label>
					<input type="text" className="form-control" placeholder="Name" {...register("name")} />
					<span>{errors.name && errors.name.message}</span>
				</div>
				<div className="form-group">
					<label>price</label>
					<input type="number" className="form-control" {...register("price")} />
					<span>{errors.price && errors.price.message}</span>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</>
	);
};

export default Demo;
