import React, { Component } from 'react'
import {FaPlus} from 'react-icons/fa'

class AddStickerButton extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
        this.addSticker = this.addSticker.bind(this)
    }

    addSticker = function(){
        
        var modal = document.getElementById("stickerPopup");
        var span = document.getElementsByClassName("close")[0];

        modal.style.display = "block";

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
    }

    render() { 
        return ( 
            <div onClick={this.addSticker} id="add-sticker-btn" role="button"
                className="btn btn-success"><FaPlus />
            </div>
        )
    }
}
 
export default AddStickerButton