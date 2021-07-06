import React from "react";
import Cards from "./Cards";

class HomeContent extends React.Component {
    constructor(data) {
        super(data)
        this.data = data.data.data
    }

    render () {
        return (
            <div className='home-content'>
                {this.data.map(item => 
                    <Cards key={item.id} item={item} />
                )}
            </div>
        )
    }
}

export default HomeContent
