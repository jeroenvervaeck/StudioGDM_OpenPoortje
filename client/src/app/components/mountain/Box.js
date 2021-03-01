import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
const style = {
    display: 'inline-block',
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    backgroundColor: 'white',
    cursor: 'move',
    position: 'relative',
};
export const Box = ({ id, left, top, hideSourceOnDrag, children, }) => {
    hideSourceOnDrag = true;
    const [{ isDragging }, drag] = useDrag({
        item: { id, left, top, type: ItemTypes.BOX },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    if (isDragging && hideSourceOnDrag) {
        return <div ref={drag}/>;
    }
    return (<div ref={drag} style={{ ...style, left, top }}>
			Mannetje
		</div>);
};

/*
export const Box = () => {
    const [, drag] = useDrag({ item: { type: ItemTypes.BOX } });
    return (<div ref={drag} style={style}>
			Mannetje
		</div>);
};
*/