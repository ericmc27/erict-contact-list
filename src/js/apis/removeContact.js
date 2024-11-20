export const removeContact = async(id, actions, store,setStore)=>{
    await fetch(`https://playground.4geeks.com/contact/agendas/Eric/contacts/${id}`,
         {method: "DELETE"})
    actions.getSingleAgenda()
    setStore({...store, visiblePopUp: null})
}