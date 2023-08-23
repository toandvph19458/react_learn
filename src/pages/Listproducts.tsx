import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {};

const Listproducts = (props: Props) => {
	const [products, setproducts] = useState();
	useEffect(() => {
		axios
			.get("http://localhost:3000/products")
			.then(function ({ data }) {
				// handle success
				setproducts(data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.finally(function () {
				// always executed
			});
	}, []);
	return (
		<>
			<table>
				<tr>
					<th>id</th>
					<th>name</th>
					<th>price</th>
				</tr>
				{products?.map((item) => {
					return (
						<tr>
							<td>{item.id}</td>
							<td>{item.name}</td>
							<td>{item.price}</td>
						</tr>
					);
				})}
			</table>
		</>
	);
};

export default Listproducts;
