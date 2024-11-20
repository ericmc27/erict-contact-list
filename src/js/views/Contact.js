import React, { useContext, useEffect, useRef } from "react"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ContactCard from "../components/ContactCard";


const Contact = () => {
  const { store } = useContext(Context)
  return (
    <>
      {store.userAgenda &&
        <>
          <Link to="/add-contact"><button type="btn" className="btn btn-success" style={{ marginLeft: "920px", marginTop: "15px", marginBottom: "15px" }}>Add new contact</button></Link>
          {store.userAgenda.contacts.length !== 0 ? store.userAgenda.contacts.map((contact, index) => (
            <div key={index} className="d-flex flex-column align-items-center">
              <ContactCard {...contact} />
            </div>
          )) : (<h1 className="d-flex justify-content-center">No contacts</h1>)
          }
        </>
      }
    </>
  )
}

export default Contact