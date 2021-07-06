import AboutBanner from "../components/AboutBanner"
import Header from "../components/Header"
import Faq from "../components/Faq"
import Footer from "../components/Footer"
import React from "react"

class About extends React.Component {
    render() {
        return (
            <div className='faq-section'>
                <Header/>
                <AboutBanner/>
                <Faq/>
                <Footer/>
            </div>
        )
    }
}

export default About
