import { React, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import mannetjeMap from './MannetjeMap.svg';
import { getEmptyImage } from 'react-dnd-html5-backend';

const style = {
    backgroundColor: 'transparent',
    padding: '0.5rem 1rem',
    cursor: 'move',
    display: 'inline-block',
    position: 'relative',
  }


export const Box = ({ id, left, top }) => {
    const [{ isDragging }, drag, preview] = useDrag({
      item: { id, left, top, type: ItemTypes.BOX },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
    })
    useEffect(() => {
      preview(getEmptyImage(), { captureDraggingState: true });
    }, []);
    return (
        <div ref={drag} style={{ ...style, left, top }}>
            <img src={mannetjeMap} alt="mannetje" className="mannetje" width="50px"></img>
	    </div>
    )
}
