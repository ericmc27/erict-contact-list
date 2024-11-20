export const addContact = (e, actions)=>{
   e.preventDefault()
   const inputs = Array.from(e.target.elements)
   let newValue = inputs[2].value
   inputs[2].value = `(${newValue.slice(0, 3)}) ${newValue.slice(3,6)}-${newValue.slice(6)}`
   let obj = inputs.reduce((acc, input)=>{
      if(input.name){
         acc[input.name] = input.value
      }
      return acc
   }, {})

   obj = JSON.stringify(obj)
   for(let input of inputs){
      input.value = ""
   }
   fetchPost(obj, actions)
}

const fetchPost = async(obj, actions)=>{
   await fetch("https://playground.4geeks.com/contact/agendas/Eric/contacts", {method: "POST",
       headers: {"Content-Type":"application/json"},
       body: obj})
   actions.getSingleAgenda()
}
