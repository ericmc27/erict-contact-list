import { json } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			findSlug: async() => {
					// const store = getStore()
					// const agenda = "https://playground.4geeks.com/contact/agendas/Eric"
					// const response = await (await fetch(agenda)).json()
					// if(!response.slug){
					// 	await getActions().createSlug(agenda)
					// 	await getActions.findSlug()
					// }
					// setStore({...store, userAgenda:response})
			},
			createSlug: async(agenda)=>{
				let name = agenda.split('/')
				name = name[name.length-1]
				await fetch(agenda, {method: "POST",
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({slug:`${name}`})})
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
