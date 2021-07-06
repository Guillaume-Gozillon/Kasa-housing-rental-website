import React from "react"
import { Link } from "react-router-dom"

class Cards extends React.Component {
    constructor(item) {
        super(item)
        this.item = item.item
    }
    render() {
        return (
            <Link to={`/rental/${this.item.id}`}>
                <div className="card">
                    <h1>{this.item.title}</h1>
                    <img src={this.item.cover} alt={this.item.title} />
                </div>
            </Link>
        )
    }
}

export default Cards
