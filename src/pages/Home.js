import HomeBanner from "../components/HomeBanner"
import HomeContent from "../components/HomeContent"

const Home = ({data}) => {
    return (
        <div>
            <HomeBanner/>
            <HomeContent data={data}/>
        </div>
    )
}

export default Home
