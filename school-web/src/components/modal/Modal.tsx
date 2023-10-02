import { useEffect } from "react"
import { subscribe } from "../../utils/pubsub.js";
import {StudentsShownInEvent} from "../../utils/events/StudentsShownInEvent.js"

const Modal = () => {
  useEffect(()=>{
    const handle = subscribe(StudentsShownInEvent, (students) => {
      console.log("MOSTRAR MODAL", students)
    });

    return function cleanup() {
      handle.unsubscribe();
    };
  }, [])
  return (
    <div>Modal</div>
  )
}

export default Modal