import { default as React, Fragment, useEffect, useState } from 'react';

import './Note.scss';

const Note = ({id, onSelect, text, posX, posY, onDelete}) => {

    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    const [isSelected, setIsSelected] = useState(false);
    const [dragItem, setDragItem] = useState();

    useEffect(() => {
        const el = document.getElementById("note-"+id);
        if(!dragItem) setDragItem(el)
        el.addEventListener("touchstart", dragStart, false);
        el.addEventListener("touchend", dragEnd, false);
        el.addEventListener("touchmove", drag, false);

        el.addEventListener("mousedown", dragStart, false);
        el.addEventListener("mouseup", dragEnd, false);
        el.addEventListener("mousemove", drag, false);
    }, [dragItem]);

    function dragStart(e) {
        if (e.type === "touchstart") {
          initialX = e.touches[0].clientX - xOffset;
          initialY = e.touches[0].clientY - yOffset;
        } else {
          initialX = e.clientX - xOffset;
          initialY = e.clientY - yOffset;
        }
  
        active = true;
      }
  
      function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
  
        active = false;
      }
  
      function drag(e) {
        if (active) {
          e.preventDefault();
        
          if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
          } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
          }
  
          xOffset = currentX;
          yOffset = currentY;
  
          setTranslate(currentX, currentY, dragItem);
        }
      }
  
      function setTranslate(xPos, yPos, el) {
        if(el) el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
      }

	return (
		<div className="note" id={"note-"+id} style={{top: posX, left: posY}} onClick={onSelect}>
            {
                (isSelected)
                ?<Fragment>
                    <button onClick={() => onDelete()}>Delete</button>
                </Fragment>
                : null
            }
            <p className="note__text">
                {text}
            </p>
		</div>
	);
	
};

export default Note;
