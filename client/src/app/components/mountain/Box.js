import { React } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import mannetjeMap from './MannetjeMap.svg';

//import KidAnimation from './Kid';
//import { AdobeAn, createjs } from './KID_HTML_CANVAS.js?1611933293348';

const style = {
    border: '1px dashed gray',
    backgroundColor: 'transparent',
    padding: '0.5rem 1rem',
    cursor: 'move',
    display: 'inline-block',
    position: 'relative',
  }


export const Box = ({ id, left, top }) => {
    const [{ isDragging }, drag] = useDrag({
      item: { id, left, top, type: ItemTypes.BOX },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
    })
    return (
        <div ref={drag} style={{ ...style, left, top }}>
            <img src={mannetjeMap} alt="mannetje" className="mannetje" width="50px"></img>
	    </div>
    )
}
