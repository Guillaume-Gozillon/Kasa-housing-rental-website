import React, { Component } from 'react'

class Toggle extends Component {
    constructor(children) {
        super(children)
        this.state = { toggle: false } 
    }

    handleToggle = () => {
        const toggleHandled = this.state.toggle === false 
            ? this.state.toggle = true 
            : this.state.toggle = false

        this.setState({
            toggleHandled
        })
    }

    render() {
        return (
            <div className='faq active' onClick={this.handleToggle}>
                <div className='faq-title'>
                    <h2>{this.props.title}</h2>
                    <i className="fas fa-chevron-down"></i>
                </div>
                {this.state.toggle && this.props.children}
            </div>
        )
    }
}

export default Toggle
