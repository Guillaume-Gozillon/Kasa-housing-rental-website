import { Link } from "react-router-dom"

const Cards = ({item}) => {
    return (
        <Link to={item.id}>
            <div className="card">
                <h1>{item.title}</h1>
                <img src={item.cover} alt={item.title} />
            </div>
        </Link>
    )
}

export default Cards
