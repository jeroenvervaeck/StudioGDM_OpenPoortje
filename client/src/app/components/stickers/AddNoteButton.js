import React, { Component } from 'react'
import { fontSolid } from '../../assets'

class AddNoteButton extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
        this.addNote = this.addNote.bind(this)
    }

    addNote = function(){
        this.props.onAdd("Nieuwe nota", "Hier kan je iets schrijven...")
    }

    render() { 
        return ( 
            <div onClick={this.addNote} id="add-note-btn" role="button" className="btn btn-success">
                <img src={fontSolid}></img>
            </div>
        )
    }
}
 
export default AddNoteButton
