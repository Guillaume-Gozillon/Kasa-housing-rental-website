const Cards = ({item}) => {
    return (
        <div className="card">
            <h1>{item.title}</h1>
            <img src={item.cover} alt="" />
        </div>
    )
}

export default Cards
