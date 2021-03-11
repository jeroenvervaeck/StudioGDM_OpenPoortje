import { default as React, Fragment, useState, useEffect } from 'react';

import './FicheUI.scss';

// Component imports
import Note from './Components/Note';

const FicheUI = () => {

    const [ notes, setNotes ] = useState([]);
    const [ stickers, setStickers ] = useState([]);
    const [ dynEls, setDynEls ] = useState([]);
    const [ dynElIdToDelete, setDynElIdToDelete ] = useState([]);

    // Popup states
    const [ newNotePopupIstVisible, setNewNotePopupIsVisible ] = useState(false);
    const [ notePopupId, setNotePopupId ] = useState();

    useEffect(() => {
        if (newNotePopupIstVisible || notePopupId !== undefined) {
            const inputEl = document.getElementById('new-note-input');
            inputEl.select();

        }
    }, [newNotePopupIstVisible, notePopupId]);

    useEffect(() => {
        if (dynElIdToDelete !== undefined) {
            deleteNote(dynElIdToDelete)
            setDynElIdToDelete();

        }
    }, [dynElIdToDelete]);

    const addNewNote = ( text, posX = window.screen.width/2, posY = window.screen.height/2 ) => {
        setNewNotePopupIsVisible(false);
        if (text) {
            const note = {
                id: notes.length + stickers.length,
                posX,
                posY,
                text,
            }
    
            setNotes([...notes, note]);
            const newNoteElement = (
            <Note 
                key={"dyn-el-"+note.id} 
                id={note.id} 
                isSelected={false} 
                text={note.text} 
                posX={note.posX} 
                posY={note.posY} 
                onDelete={()=> setDynElIdToDelete(note.id)}
                onSelect={()=> setNotePopupId(note.id)}
            />);
            setDynEls([...dynEls, newNoteElement]);
        }
    }

    const updateNote = (text, id) => {
        // update notes
        const note = notes.filter((note) => note.id === id)[0]
        const newNote = note;
        newNote.text = text;
        const newNotes = [...notes.filter((note) => note.id !== id), newNote]
        setNotes(newNotes);

        // update elements
        const el = dynEls.filter((el) => el.props.id === id)[0];
        const newEl = <Note
            key={'kaka'} 
            id={el.props.id} 
            isSelected={el.props.isSelected} 
            text={text} 
            posX={el.props.posX} 
            posY={el.props.posY} 
            onDelete={el.props.onDelete}
            onSelect={el.props.onSelect}
         />
         
        const newDynEls = [...dynEls.filter((note) => note.props.id !== id), newEl]
        setDynEls(newDynEls);
    }

    const deleteNote = (id) => {
        console.log(id)
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes(filteredNotes);
        const filteredEls = dynEls.filter((el) => el.props.id !== id);
        setDynEls(filteredEls);
    }


	return (
		<div className="fiche-ui">
            <div className="fiche-ui__action-buttons">
                <div className="fiche-ui__action-buttons-button" onClick={() => {setNewNotePopupIsVisible(!newNotePopupIstVisible); }}>
                    A
                </div>
            </div>
            <div className="fiche-ui__nav-buttons">

            </div>
            <div className="fiche-ui__dyn-els">
                {dynEls}
            </div>

            {
                ( newNotePopupIstVisible || notePopupId !== undefined)
                ? <div className="fiche-ui__note-popup">
                    <textarea 
                        defaultValue={
                            (notePopupId !== undefined && notes.filter((note) => note.id === notePopupId)[0]) 
                            ?notes.filter((note) => note.id === notePopupId)[0].text
                            :''
                        }
                        id="new-note-input" 
                    />
                    <div className="fiche-ui__note-popup-bttn-container">
                        <button onClick={(e) => {
                                const inputValue = document.getElementById('new-note-input').value;
                                if(notePopupId !== undefined) {
                                    updateNote(inputValue, notePopupId);
                                    setNotePopupId();
                                    if (!inputValue) deleteNote(notePopupId)
                                }else {
                                    addNewNote(inputValue)
                                }
                        }}>Bevestig</button>
                        {
                            (notePopupId !== undefined) ? <button onClick={() => {deleteNote(notePopupId);setNotePopupId();}}>Verwijder</button>: null
                        }
                    </div>
                    
                </div>
                : null
            }
			
		</div>
	);
	
};

export default FicheUI;
