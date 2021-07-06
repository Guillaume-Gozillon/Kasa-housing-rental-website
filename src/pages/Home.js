import HomeBanner from "../components/HomeBanner"
import HomeContent from "../components/HomeContent"
import Footer from "../components/Footer"
import Header from "../components/Header"

import React from "react"

class Home extends React.Component {
    constructor(data) {
        super(data)
        this.data = data
    }

    render() {
        return (
            <div className='test'>
            <Header/>
            <HomeBanner/>
            <HomeContent data={this.data}/>
            <Footer/>
        </div>
        )
    }
} 

export default Home 
