import React, { Component } from 'react'

class Sticker extends Component {
    constructor(props) {
        super(props)
    }
    
    renderDefaultSticker() { 
        return ( 
            <div className="sticker">
                <img draggable="false"  width="100" height="100" src={this.props.src} alt={this.props.id}/>
            </div>
         )
    }
    render (){
        return (
            this.renderDefaultSticker()
        )     
    }
}
 
export default Sticker