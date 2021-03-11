import React, { Component } from 'react'
import Note from './Note'
import Sticker from './Sticker.js';
import AddNoteButton from './AddNoteButton'
import AddStickerButton from './AddStickerButton'
import { Save } from '..';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import { Link } from "react-router-dom";
import * as Routes from '../../routes';
import { RiScreenshot2Fill } from 'react-icons/ri';

import * as Stickerimg from '../../assets/stickers';
import * as Screenshot from 'html2canvas';

import './stickers.css'
import './stickers.scss'
import { Fragment } from 'react';

const images = [
    {
        id: '0',
        url: Stickerimg.sticker01
    },
    {
        id: '1',
        url: Stickerimg.sticker02
    },
    {
        id: '2',
        url: Stickerimg.sticker03
    },
    {
        id: '3',
        url: Stickerimg.sticker04
    },
    {
        id: '4',
        url: Stickerimg.sticker05
    },
    {
        id: '5',
        url: Stickerimg.sticker06
    },
    {
        id: '6',
        url: Stickerimg.sticker07
    },
    {
        id: '7',
        url: Stickerimg.sticker08
    },
    {
        id: '8',
        url: Stickerimg.sticker09
    },
    {
        id: '9',
        url: Stickerimg.sticker10
    },
    {
        id: '10',
        url: Stickerimg.sticker11
    },
    {
        id: '11',
        url: Stickerimg.sticker12
    },
    {
        id: '12',
        url: Stickerimg.sticker13
    },
    {
        id: '13',
        url: Stickerimg.sticker14
    },
    {
        id: '14',
        url: Stickerimg.sticker15
    },
    {
        id: '15',
        url: Stickerimg.sticker16
    },
    {
        id: '16',
        url: Stickerimg.sticker17
    },
    {
        id: '17',
        url: Stickerimg.sticker18
    },
    {
        id: '18',
        url: Stickerimg.sticker19
    },
    {
        id: '19',
        url: Stickerimg.sticker20
    },
    {
        id: '20',
        url: Stickerimg.sticker21
    },
    {
        id: '21',
        url: Stickerimg.sticker22
    },
    {
        id: '22',
        url: Stickerimg.sticker23
    },
    {
        id: '23',
        url: Stickerimg.sticker24
    },
    {
        id: '24',
        url: Stickerimg.sticker25
    },
    {
        id: '25',
        url: Stickerimg.sticker26
    },
    {
        id: '26',
        url: Stickerimg.sticker27
    },
    {
        id: '27',
        url: Stickerimg.sticker28
    },
    {
        id: '28',
        url: Stickerimg.sticker29
    },
    {
        id: '29',
        url: Stickerimg.sticker30
    },
    {
        id: '30',
        url: Stickerimg.stickerPencil
    },
  ]

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            notes : [],
            stickers: [],
            showState : false, 
            screenshotURL: undefined,
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.componentDidUpdate = this.componentDidUpdate.bind(this)
        this.create_note = this.create_note.bind(this)
        this.create_sticker = this.create_sticker.bind(this)
        this.update_note = this.update_note.bind(this)
        this.remove_note = this.remove_note.bind(this)
        this.render_each_note = this.render_each_note.bind(this)
        this.render_each_sticker = this.render_each_sticker.bind(this)
        this.save = this.save.bind(this)
        this.saveBoxHandler = this.saveBoxHandler.bind(this);
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
        console.log("upgedade")
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
                    xpos : 800,
                    ypos : 200,
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
        document.getElementById("stickerPopup").style.display = "none";
    }


    componentDidMount(){
        let loaded_notes = JSON.parse(localStorage.getItem("notes"))
        let loaded_stickers = JSON.parse(localStorage.getItem("stickers"))
        
        loaded_notes = loaded_notes || [];
        loaded_stickers = loaded_stickers || [];
        
        this.setState(()=>({notes : loaded_notes }))
        this.setState(()=>({stickers : loaded_stickers }))
    }

    componentDidUpdate(){
        localStorage.setItem("notes", JSON.stringify(this.state.notes));
        localStorage.setItem("stickers", JSON.stringify(this.state.stickers));
        console.log(this.state);
    }

    componentWillReceiveProps(){
        this.setState({notes:[]})
        this.setState({stickers:[]})
    }
    

    render_each_note = function(note, index){
      
        return (

            <Draggable 
                key={"note-"+index}
                handle={'.drag-icon'}
                onStart={e => e.preventDefault()}
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

    save = async function( e, proceed ) {
        e.preventDefault();
        this.setState({
            showState: false
        });
        let blob = await fetch(this.state.screenshotURL).then(r => r.blob());
        var img = new File([blob], "screenshot.png");
        this.props.onSave(img);
    }

    saveBoxHandler() {
        this.setState({
            showState: false
        });
        console.log(this.state.showState);
    }

    render() { 
        return (
            <div id="board">
                
                {(this.state.notes) ? this.state.notes.map(this.render_each_note) : null}
                {(this.state.stickers) ? this.state.stickers.map(this.render_each_sticker) : null}
                
                <div id="stickerPopup" className="popup">
                    <div className="modal-content">
                        <div className="modal-content__buttons">
                            <button className="popup-btn" type="button" onClick={() => this.remove_stickers()}>Stickers verwijderen</button>
                            <span className="close">
                                <p>x</p>
                            </span>
                        </div>
                        <div className="modal-content__stickers">
                            <img src={images[0].url} alt={images[0]} onClick={() => this.create_sticker(images[0].url)}></img>
                            <img src={images[1].url} alt={images[1]} onClick={() => this.create_sticker(images[1].url)}></img>
                            <img src={images[2].url} alt={images[2]} onClick={() => this.create_sticker(images[2].url)}></img>
                            <img src={images[3].url} alt={images[3]} onClick={() => this.create_sticker(images[3].url)}></img>
                            <img src={images[4].url} alt={images[4]} onClick={() => this.create_sticker(images[4].url)}></img>
                            <img src={images[5].url} alt={images[5]} onClick={() => this.create_sticker(images[5].url)}></img>
                            <img src={images[6].url} alt={images[6]} onClick={() => this.create_sticker(images[6].url)}></img>
                            <img src={images[7].url} alt={images[7]} onClick={() => this.create_sticker(images[7].url)}></img>
                            <img src={images[8].url} alt={images[8]} onClick={() => this.create_sticker(images[8].url)}></img>
                            <img src={images[9].url} alt={images[9]} onClick={() => this.create_sticker(images[9].url)}></img>
                            <img src={images[10].url} alt={images[10]} onClick={() => this.create_sticker(images[10].url)}></img>
                            <img src={images[11].url} alt={images[11]} onClick={() => this.create_sticker(images[11].url)}></img>
                            <img src={images[12].url} alt={images[12]} onClick={() => this.create_sticker(images[12].url)}></img>
                            <img src={images[13].url} alt={images[13]} onClick={() => this.create_sticker(images[13].url)}></img>
                            <img src={images[14].url} alt={images[14]} onClick={() => this.create_sticker(images[14].url)}></img>
                            <img src={images[15].url} alt={images[15]} onClick={() => this.create_sticker(images[15].url)}></img>
                            <img src={images[16].url} alt={images[16]} onClick={() => this.create_sticker(images[16].url)}></img>
                            <img src={images[17].url} alt={images[17]} onClick={() => this.create_sticker(images[17].url)}></img>
                            <img src={images[18].url} alt={images[18]} onClick={() => this.create_sticker(images[18].url)}></img>
                            <img src={images[19].url} alt={images[19]} onClick={() => this.create_sticker(images[19].url)}></img>
                            <img src={images[20].url} alt={images[20]} onClick={() => this.create_sticker(images[20].url)}></img>
                            <img src={images[21].url} alt={images[21]} onClick={() => this.create_sticker(images[21].url)}></img>
                            <img src={images[22].url} alt={images[22]} onClick={() => this.create_sticker(images[22].url)}></img>
                            <img src={images[23].url} alt={images[23]} onClick={() => this.create_sticker(images[23].url)}></img>
                            <img src={images[24].url} alt={images[24]} onClick={() => this.create_sticker(images[24].url)}></img>
                            <img src={images[25].url} alt={images[25]} onClick={() => this.create_sticker(images[25].url)}></img>
                            <img src={images[26].url} alt={images[26]} onClick={() => this.create_sticker(images[26].url)}></img>
                            <img src={images[27].url} alt={images[27]} onClick={() => this.create_sticker(images[27].url)}></img>
                            <img src={images[28].url} alt={images[28]} onClick={() => this.create_sticker(images[28].url)}></img>
                            <img src={images[29].url} alt={images[29]} onClick={() => this.create_sticker(images[29].url)}></img>
                        </div>
                        {/* 
                        <Link to={Routes.SUPERVISOR_EIGENSTICKER} className="modal-content__draw">
                            <p>Teken je eigen sticker WIP</p>
                            <img src={images[30].url} alt={images[30]}></img>
                        </Link> 
                        */}
                    </div>
                </div>
                <div id="ui">
                    <div className="buttons">
                        <AddNoteButton onAdd={this.create_note}/>
                        <AddStickerButton/>
                    </div>

                    <a href={"#"} className="dialogBtn backBtn" onClick={(e) => this.props.onBack(e) }>keer terug</a>
                    <a href={"#"} className="dialogBtn saveBtn" onClick={() => {
                        document.getElementById('ui').style.display = 'none';
                        Screenshot(document.querySelector("body")).then(async(canvas) => {
                            const imgURL = canvas.toDataURL("image/png");
                            this.setState({screenshotURL:imgURL})
                            this.setState({showState:true});
                        });  
                    }} >opslaan</a>
                    <RiScreenshot2Fill className="screenshot"
                        onClick={() => {
                            document.getElementById('ui').style.display = 'none';
                            Screenshot(document.querySelector("body")).then((canvas) => {
                                const img = canvas.toDataURL("image/png");
                                // download png
                                const element = document.createElement('a');
                                element.setAttribute('href', img);
                                element.setAttribute('download', 'file.png');
    
                                element.style.display = 'none';
                                document.body.appendChild(element);
    
                                element.click();
    
                                document.body.removeChild(element);
                                document.getElementById('ui').style.display = 'block';
                            });
                        }}
                    />
                </div>
                    <Save 
                        onCancel={() => { 
                            document.getElementById('ui').style.display = 'block';
                            this.saveBoxHandler();
                        }} 
                        onSave={this.save}
                        showState={this.state.showState}
                    />
            
                
            </div>
        )
    }
}
 
export default Board
