import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useLoginMutation, useSignupMutation } from "../api/auth";

type Props = {};

const Signup = (props: Props) => {
	const productSchema = Yup.object({
		email: Yup.string().trim().email().required(),
		password: Yup.string().trim().min(6).required(),
		cfpassword: Yup.string()
			.trim()
			.min(6)
			.oneOf([Yup.ref("password")])
			.required(),
	});
	const [login] = useSignupMutation();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(productSchema),
	});
	const submitHandel = async (value: any) => {
		console.log(value);
		await login({
			email: value.email,
			password: value.password,
		}).then(() => {
			alert("success");
			navigate("/login");
		});
	};
	return (
		<div>
			<form onSubmit={handleSubmit(submitHandel)}>
				<div className="form-group">
					<label>Email</label>
					<input type="Email" className="form-control" placeholder="Email" {...register("email")} />
					<span>{errors.email && errors.email.message}</span>
				</div>
				<div className="form-group">
					<label>password</label>
					<input type="password" className="form-control" {...register("password")} />
					<span>{errors.password && errors.password.message}</span>
				</div>
				<div className="form-group">
					<label>cfpassword</label>
					<input type="password" className="form-control" {...register("cfpassword")} />
					<span>{errors.cfpassword && errors.cfpassword.message}</span>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Signup;
