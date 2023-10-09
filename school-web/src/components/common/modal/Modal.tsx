import { ReactNode, useEffect, useState } from "react"
import { subscribe } from "../../../utils/pubsub"
import { ModalShownInEvent } from "../../../utils/events/ModalShownInEvent";

interface ModalPropsInterface{
  children?: ReactNode
  title?: string,
}

const Modal = ({children, title}:ModalPropsInterface) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(()=>{
    const handle = subscribe(ModalShownInEvent, () => {
      setShowModal(true);
    });

    return function cleanup() {
      handle.unsubscribe();
    };
  },[])

  const handleClickClose = () => {
    setShowModal(false);
  }

  return (
    <div className="modal" tabIndex={-1} id="modal" style={ showModal ? {display:"block"} : {display:"none"}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-center">{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClickClose}></button>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal