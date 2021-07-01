import Cards from "./Cards";

const HomeContent = ({data}) => {
    return (
        <div className='home-content'>
            {data.map(item => 
                <Cards key={item.id} item={item} />
            )}
        </div>
    )
}

export default HomeContent
