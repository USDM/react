import { useState, ReactNode  } from "react";

interface CollapsePropsInterface {
  id: number;
  mainContent: ReactNode;
  subContent: ReactNode
}

const Collapse = ({ id, mainContent, subContent }: CollapsePropsInterface) => {
  const [ targetID ] = useState(`collapseExample_${id}`);
  return (
    <>
      <p className="d-inline-flex gap-1">
        <div data-bs-toggle="collapse" data-bs-target={`#${targetID}`} aria-expanded="false" aria-controls={targetID}>
          {mainContent}
        </div>
      </p>
      <div className="collapse" id={targetID}>
        <div className="card card-body">
          {subContent}
        </div>
      </div>
    </>
  )
}

export default Collapse