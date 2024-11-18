import React from "react";
import { Link } from "react-router-dom";

export const AddContact = () => {

	return(
		<>
			<div className="d-flex justify-content-center">
				<div className="d-flex flex-column w-50">
					<h1 className="text-center">Add a new contact</h1>
					<label htmlFor="name" className="fw-bold">Name</label>
					<input id="name" type="text" className="my-2" placeholder="Full Name"></input>
					<label htmlFor="email" className="fw-bold">Email</label>
					<input id="email" type="email" className="my-2" placeholder="Enter email"></input>
					<label htmlFor="phone" className="fw-bold">Phone</label>
					<input id="phone" type="text" className="my-2" placeholder="Enter phone"></input>
					<label htmlFor="address" className="fw-bold">Address</label>
					<input id="address" type="text" className="my-2" placeholder="Enter address"></input>
					<button type="button" className="btn bg-primary text-light mt-3">Save</button>
					<Link className="text-decoration-none" to="/">or get back to contacts</Link>
				</div>
			</div>
		</>
	)
};
