import Collapse from "../../common/Collapse"

interface StudentInterface {
  id: number,
  name: string
}

interface CardGroupPropsInterface{
  group: {
    id: number,
    name: string,
    students: StudentInterface[]
  }
}

const CardGroup = ({ group }:CardGroupPropsInterface) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button> Ver </button>
        <Collapse
        />
      </div>
    </div>
  )
}

export default CardGroup