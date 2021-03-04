import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { Link, Redirect } from 'react-router-dom';
import * as Routes from '../../routes';
import vlag from './Vlag.png';
import cross from './Cross.png';
function getStyle(backgroundColor , x , y) {
    return {
        
        color: 'white',
        backgroundColor,
        left: x,
        top: y,
        position: 'absolute',
        fontSize: '1rem',
    };
}
/*
function getKidFiches(){
    
    const kidObj = JSON.parse(sessionStorage.getItem('selected-kid'));
    const fiches = kidObj.fiches;

    fiches.forEach(fiche => {
        if ('positionById' in fiche.fiche_data) {
            console.log(fiche.fiche_data);
        }
       
    });

}

getKidFiches();
*/
export const Dustbin = ({ id , handler , position , children }) => {
    const [hasDropped, setHasDropped] = useState(false);
    var noFlag = true;
    const [point, setPoint] = useState({ id: id, question1: "", question2: "" });
    
    const [{ isOver, isOverCurrent }, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop(item, monitor) {
            const didDrop = monitor.didDrop();
            const delta = monitor.getDifferenceFromInitialOffset();
            const left = Math.round(item.left + delta.x);
            const top = Math.round(item.top + delta.y);
            const boxId = id;
            //console.log(didDrop);
            handler(left,top)
            if (boxId > 0) {
                const previousDustbin = document.getElementById(boxId-1);
                //console.log(previousDustbin);

                if( previousDustbin.getElementsByTagName('span').length > 0) {
                    console.log("er is een span");
                    setHasDropped(true);
                }else{
                    console.log("geen span");
                    return
                }
            }else{
                setHasDropped(true);
                //prevDropped = true;
            }
            //setHasDropped(true);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            isOverCurrent: monitor.isOver({ shallow: true }),
        }),
    });
    let backgroundColor = 'rgba(255, 0, 0, 1)';
    let x = position[0];
    let y = position[1];
    if (isOverCurrent || (isOver)) {
        backgroundColor = 'darkgreen';
    }

    /*
    <div className="textBox">
        <h1>Gesprek {id}</h1>
    </div>

    {hasDropped && <img id={"vlag-"+id} src={vlag} alt="vlag" className="vlag"></img>}

    {hasDropped && <span id={'span-'+id}>
        <img src="pic_trulli.jpg" alt="Italian Trulli"></img>            
    </span>}

    <a href={Routes.SUPERVISOR_BERGGESPREK} class="myButton">Nieuw gesprek</a>
    */

    const imageClick = (id) => {
    console.log('Click');
    setHasDropped(false);
    } 

    function getKidFiches(){
    
        const kidObj = JSON.parse(sessionStorage.getItem('selected-kid'));
        const fiches = kidObj.fiches;
    
        fiches.forEach(fiche => {
            if ('positionById' in fiche.fiche_data && fiche.fiche_data.positionById == id) {
                console.log(id);
                //document.getElementById("vlag-"+id).style.display = "block";
                var vlag = document.getElementById("vlag-"+id);
                if (vlag != null) {
                    vlag.style.display = "block";
                }
                console.log(vlag);
                noFlag = false;

            }
           
        });
    
    }

    getKidFiches();
    
    return (

        <div id={id} ref={drop} className='mountainPoint' style={getStyle(backgroundColor , x , y)}>
        
        <img id={"vlag-"+id} src={vlag} alt="vlag" className="vlag"></img>

        {hasDropped && <span id={'span-'+id}>
            <div className="textBox">
                <h1>Gesprek {id}</h1>
                <img src={cross} alt="Close Pop-up" className="cross" onClick={() => imageClick(id)}></img>
                <Link to={{ pathname: Routes.SUPERVISOR_BERGGESPREK , state: id }} className="myButton">
                    <p>Nieuw gesprek</p>
                  </Link>
            </div>            
        </span>}
			
        </div>
        
    );
};
