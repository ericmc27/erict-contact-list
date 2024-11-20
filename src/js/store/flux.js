import { removeContact } from "../apis/removeContact";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			visiblePopUp: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			setVisiblePopUpId: (id)=>{
				const store = getStore()
				setStore({...store, visiblePopUp: id})
			},
			resetVisiblePopUpId: ()=>{
				const store = getStore()
				setStore({...store, visiblePopUp: null})
			},
			deleteCurrentContact: ()=>{
				const store = getStore()
				removeContact(store.visiblePopUp, getActions(), store, setStore)
			},
			changeValue: (e, id)=>{
				const store = getStore()
				const currentContact = store.userAgenda.contacts.findIndex((contact)=>contact.id===id)
				store.userAgenda.contacts[currentContact][e.target.name] = e.target.value
			},
			getSingleAgenda: async () => {
				const store = getStore()
				const agenda = "https://playground.4geeks.com/contact/agendas/Eric"
				let response = await (await fetch(agenda)).json()
				if (!response.slug) {
					const newAgenda = await getActions().createSingleAgenda(agenda)
					setStore({ ...store, userAgenda: newAgenda })
					return
				}
				setStore({ ...store, userAgenda: response })
			},
			createSingleAgenda: async (agenda) => {
				await fetch(agenda, {
					method: "POST",
					headers: { 'Content-Type': 'application/json' }
				})
			},
		}
	};
};

export default getState;
