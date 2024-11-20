import React, { useContext } from 'react'
import { Context } from '../store/appContext'

const PopUp = () => {
  const {actions} = useContext(Context)
  return (
    <>
      <div className="card position-fixed" style={{ height: "170px", width: "400px", right: "570px", zIndex: "1" }}>
        <div className='card-header fw-bold' style={{ fontSize: "20px" }}>Are you sure?</div>
        <div className='card-body'>If you delete this the entire universe will go down!</div>
        <div className='d-flex gap-2 justify-content-end card-footer'>
          <button className="btn bg-primary text-light" onClick={()=>(actions.resetVisiblePopUpId())}>Oh no!</button>
          <button className="btn bg-secondary text-light" onClick={()=>(actions.deleteCurrentContact())}>Yes baby!</button>
        </div>
      </div>
    </>
  )
}

export default PopUp