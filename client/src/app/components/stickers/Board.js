import React, { Component } from 'react'
import Note from './Note'
import Sticker from './Sticker.js';
import AddNoteButton from './AddNoteButton'
import AddStickerButton from './AddStickerButton'
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import { Link } from "react-router-dom";
import * as Routes from '../../routes';

import * as Screenshot from 'html2canvas';

import './stickers.css'

const images = [
    {
        id: '0',
        url: 'https://news.files.bbci.co.uk/include/newsspec/27716-us-poll-tracker-2020-v4/assets/app-project-assets/img/trump.png?v=2'
    },
    {
        id: '1',
        url: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Barack_Obama_Circle.png'
    },
    {
      id: '2',
      url: 'https://res.cloudinary.com/crooked-media/image/upload/f_auto,q_auto/c_scale,w_330/v1579049493/VSA-Candidate-Detail-QA_Biden_czv925.png'
    },
    {
      id: '3',
      url: 'https://www.flaticon.com/svg/static/icons/svg/61/61183.svg'
    }
  ]

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            notes : [],
            stickers: []
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.componentDidUpdate = this.componentDidUpdate.bind(this)
        this.create_note = this.create_note.bind(this)
        this.create_sticker = this.create_sticker.bind(this)
        this.update_note = this.update_note.bind(this)
        this.remove_note = this.remove_note.bind(this)
        this.render_each_note = this.render_each_note.bind(this)
        this.render_each_sticker = this.render_each_sticker.bind(this)
    }

    update_note = function(id, new_title, new_text){
        this.setState(
            (prevState) => ({
                notes : prevState.notes.map(
                    (note) => ( id !== note.id) ? note : {
                        ...note,
                        title : new_title,
                        text : new_text
                    }
                )
            })
        )
    }

    remove_note = function(id){
        this.setState(
            (prevState) => ({
                notes : prevState.notes.filter( note =>(id !== note.id))
            })
        )
    }

    remove_stickers = function(){
        this.setState({stickers:[]})
    }
    
    create_note = function(new_title, new_text){
        const new_id = Date.now()
        this.setState(
            (prevState) => ({
                notes : [...prevState.notes, {
                    id : new_id,
                    title : new_title,
                    text : new_text,
                    xpos : 0,
                    ypos : 0,
                }]
            })
        )
        console.log("note aangemaakt! : " + this.state.notes)
    }

    create_sticker = function(new_src){
        const new_id = Date.now()
        this.setState(
            (prevState) => ({
                stickers : [...prevState.stickers, {
                    id : new_id,
                    src : new_src,
                    xpos : 0,
                    ypos : 0,

                }]
            })
        )
        console.log("sticker aangemaakt! : " + this.state.stickers)
    }


    componentDidMount(){
        let loaded_notes = JSON.parse(localStorage.getItem("notes"))
        let loaded_stickers = JSON.parse(localStorage.getItem("stickers"))
        

        if(loaded_notes === null || loaded_notes.length === 0){
            loaded_notes = [
                    {
                        title: "Sample note",
                        text:   
                            ["This is a demo-version of the application.",
                            "The notes are stored in localStorage!",
                            "Click here to view the note!",
                            "Click this text or the edit button to edit.",
                            "Click on Save button to update the changes!"
                        ].join("\n"),
                        id: 1
                    }
                ]
            }
        this.setState(()=>({notes : loaded_notes}))
        this.setState(()=>({stickers : loaded_stickers}))
    }

    componentDidUpdate(){
        localStorage.setItem("notes", JSON.stringify(this.state.notes))
        localStorage.setItem("stickers", JSON.stringify(this.state.stickers))
    }

    componentWillReceiveProps(){
        this.setState({notes:[]})
        this.setState({stickers:[]})
    }
    

    render_each_note = function(note, index){
      
        return (

            <Draggable 
            key={"note-"+index}
            defaultPosition={{x: note.xpos, y: note.ypos}}
            onStop={(e, data) => {
                    this.setState({ defaultPosition: { x: data.x, y: data.y } });
                    note.xpos = data.x;
                    note.ypos = data.y;
                }}>
                <div className="box no-cursor noteContainer">
                    <Note
                    text={note.text}
                    title={note.title}
                    id={note.id}
                    key={note.id}
                    onRemove={this.remove_note}
                    onUpdate={this.update_note}
                    />
                </div>
            </Draggable>
        )
    }

    render_each_sticker = function(sticker, index){
    
        return (
            <Draggable 
            key={"sticker-"+index}
            defaultPosition={{x: sticker.xpos, y: sticker.ypos}}
            onStop={(e, data) => {
                    this.setState({ defaultPosition: { x: data.x, y: data.y } });
                    sticker.xpos = data.x;
                    sticker.ypos = data.y;
                }}>
                <div className ="no-cursor stickerDiv">
                    <Sticker id={sticker.id} src={sticker.src}/>
                </div>
            </Draggable>
        )
    }

    render() { 
        return (
            <div id="board">
                <button value="Screenshot" onClick={() => {
                    Screenshot(document.querySelector("#board")).then((canvas) => {
                        const img = canvas.toDataURL("image/png");
                        // download png
                        const element = document.createElement('a');
                        element.setAttribute('href', img);
                        element.setAttribute('download', 'file.png');

                        element.style.display = 'none';
                        document.body.appendChild(element);

                        element.click();

                        document.body.removeChild(element);
                    });
                }}/>
                {(this.state.notes) ? this.state.notes.map(this.render_each_note) : null}
                {(this.state.stickers) ? this.state.stickers.map(this.render_each_sticker) : null}
                
                <div id="stickerPopup" className="popup">
                    <div className="modal-content">
                        <span className="close">&times;</span>
                        <img src={images[0].url} alt={images[0]} onClick={() => this.create_sticker(images[0].url)}></img>
                        <img src={images[1].url} alt={images[1]} onClick={() => this.create_sticker(images[1].url)}></img>
                        <img src={images[2].url} alt={images[2]} onClick={() => this.create_sticker(images[2].url)}></img>
                        <Link to={Routes.SUPERVISOR_EIGENSTICKER} className="">
                        <img src={images[3].url} alt={images[3]}></img>
                        </Link>
                        <button className="popup-btn" type="button" onClick={() => this.remove_stickers()}>Delete stickers</button>
                    </div>
                </div>
                <div className="buttons">
                    <AddNoteButton onAdd={this.create_note}/>
                    <AddStickerButton/>
                </div>
            </div>
        )
    }
}
 
export default Board