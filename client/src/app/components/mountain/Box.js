import { React,useEffect} from 'react';
import { useDrag, DragSource, DragPreviewImage } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import mannetje from './WIGGLING.gif';

//import KidAnimation from './Kid';
//import { AdobeAn, createjs } from './KID_HTML_CANVAS.js?1611933293348';

const style = {
    display: 'inline-block',
    backgroundColor: 'transparent',
    cursor: 'move',
    position: 'relative',
};

export const Box = ({ id, left, top, hideSourceOnDrag, connectDragSource, connectDragPreview, children, }) => {
    hideSourceOnDrag = true;
    
    const [{ isDragging }, drag, preview] = useDrag({
        item: { id, left, top, type: ItemTypes.BOX },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        
    });
     
    if (isDragging && hideSourceOnDrag) {
        console.log("dragging");
        return <div ref={drag}/>;
        
    }
    
    return (
    <div ref={drag} style={{ ...style, left, top }}>
        <DragPreviewImage connect={preview} src={mannetje} />
        <img src={mannetje} alt="mannetje" className="mannetje" width="70px"></img>
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