import React, { Component } from "react"
import HomeBanner from "../components/HomeBanner"
import HomeContent from "../components/HomeContent"
import Footer from "../components/Footer"
import Header from "../components/Header"

class Home extends Component {
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
