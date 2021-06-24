import HomeBanner from "../components/HomeBanner"
import HomeContent from "../components/HomeContent"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Home = ({data}) => {
    return (
        <div className='test'>
            <Header/>
            <HomeBanner/>
            <HomeContent data={data}/>
            <Footer/>
        </div>
    )
}

export default Home 
