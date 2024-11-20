export const updateContact = (e, id, store, actions) => {
    e.preventDefault()
    const currentContact = store.userAgenda.contacts.find((contact) => contact.id === id)
    let phone = currentContact.phone.replace(/[ ()-]/g, '')
    currentContact.phone = `(${phone.slice(0, 3)}) ${phone.slice(3,6)}-${phone.slice(6)}`
    delete currentContact.id
    putContact(currentContact, id, actions)
}

const putContact = async(currentContact, id, actions) => {
    await fetch(`https://playground.4geeks.com/contact/agendas/Eric/contacts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentContact)
    }
    )
    actions.getSingleAgenda()
}