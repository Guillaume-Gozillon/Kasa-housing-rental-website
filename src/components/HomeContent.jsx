import Cards from "./Cards";

const HomeContent = ({data}) => {

    console.log(data);

    return (
        <div className='home-content'>
            {data.map(item => 
                <Cards item={item} />
            )}
        </div>
    )
}

export default HomeContent
