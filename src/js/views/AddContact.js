import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link, useLocation } from "react-router-dom";
import { addContact } from "../apis/addContact";
import { updateContact } from "../apis/updateContact";


export const AddContact = () => {
	const {store, actions} = useContext(Context)
	const location = useLocation()
	let name, email, phone, address, id
	if(location.state){({name, email, phone, address, id} = location.state.props)}

	return (
		<>
			<div className="d-flex justify-content-center">
					<form className="d-flex flex-column w-50" onSubmit={!location.state ? e=>addContact(e, actions) : e=>updateContact(e, id, store, actions)}>
						<h1 className="text-center">{!location.state ? "Add a new contact" : "Edit your contact"}</h1>
						<label htmlFor="name" className="fw-bold">Name</label>
						<input id="name" type="text" className="my-2" placeholder="Full Name" name="name" defaultValue={name} onChange={location.state ? (e)=>(actions.changeValue(e, id)) : null}></input>
						<label htmlFor="email" className="fw-bold">Email</label>
						<input id="email" type="email" className="my-2" placeholder="Enter email" name="email" defaultValue={email} onChange={location.state ? (e)=>(actions.changeValue(e, id)) : null}></input>
						<label htmlFor="phone" className="fw-bold">Phone</label>
						<input id="phone" type="text" className="my-2" placeholder="Enter phone" name="phone" minLength={10} maxLength={10} defaultValue={phone} onChange={location.state ? (e)=>(actions.changeValue(e, id)) : null}></input>
						<label htmlFor="address" className="fw-bold">Address</label>
						<input id="address" type="text" className="my-2" placeholder="Enter address" name="address" defaultValue={address} onChange={location.state ? (e)=>(actions.changeValue(e, id)) : null}></input>
						<button type="submit" className="btn bg-primary text-light mt-3">Save</button>
						<Link className="text-decoration-none" to="/">or get back to contacts</Link>
					</form>
			</div>
		</>
	)
};
