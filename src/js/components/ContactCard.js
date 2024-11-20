import React, { useContext } from 'react'
import PopUp from './PopUp'
import {Link} from 'react-router-dom'
import { removeContact } from '../apis/removeContact'
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope, faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons'


const ContactCard = (props) => {
    const { store, actions } = useContext(Context)
    const { id } = props
    return (
        <>
            <div className='d-flex border rounded' style={{ height: "130px", width: "600px"}}>
                <img className='rounded-circle mt-2 ms-4' src="https://xsgames.co/randomusers/avatar.php?g=male" style={{ height: "110px" }} />
                <div className='d-flex flex-column'>
                    <p className='ms-3 mt-2 m-0 fs-4'>
                        {props.name}
                    </p>
                    {/* removeContact(id, actions) */}
                    {store.visiblePopUp === id && <PopUp/>} 
                    <FontAwesomeIcon onClick={() => (actions.setVisiblePopUpId(id))} role='button' className='position-absolute' icon={faTrashCan} style={{ color: "#000000", right: "505px", marginTop: "20px" }} />
                    <Link to="/add-contact" state={{props}} className='position-absolute' style={{right: "545px", marginTop: "16px"}}><FontAwesomeIcon role='button'  icon={faPen} style={{ color: "#000000"}} /></Link>

                    <p className='ms-3 m-0'>
                        <FontAwesomeIcon icon={faLocationDot} style={{ color: "#505050", }} className='me-1' />
                        {props.address}
                    </p>
                    <p className='ms-3 m-0'>
                        <FontAwesomeIcon icon={faPhone} rotation={270} style={{ color: "#505050", }} className='me-1' />
                        {props.phone}
                    </p>
                    <p className='ms-3 m-0'>
                        <FontAwesomeIcon icon={faEnvelope} style={{ color: "#505050", }} className='me-1' />
                        {props.email}
                    </p>
                </div>

            </div>
        </>
    )
}

export default ContactCard