import HomeBanner from "../components/HomeBanner"
import HomeContent from "../components/HomeContent"
import Footer from "../components/Footer"

const Home = ({data}) => {
    return (
        <div>
            <HomeBanner/>
            <HomeContent data={data}/>
            <Footer/>
        </div>
    )
}

export default Home
