import React, { useState, useEffect, setState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { Link, Redirect } from 'react-router-dom';
import * as Routes from '../../routes';
import vlag from './Vlag.png';
import cross from './Cross.png';
import like from './Like.png';
import dislike from './Dislike.png';
import { useApi, useAuth } from '../../services';
import setupTouchDNDCustomEvents from 'touch-dnd-custom-events'



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
    const [hasFlag, setHasFlag] = useState(false);
    const [shortDescription, setShortDescription] = useState("");
    const [opinionBtnOpacity, setOpinionBtnOpacity] = useState(0.5);
    const { updateMountainFiche, updateSelectedKidData } = useApi();
	const kidObj = JSON.parse(sessionStorage.getItem('selected-kid'))
    
    setupTouchDNDCustomEvents()

    const [{ isOver, isOverCurrent }, drop , touchdragover] = useDrop({
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
                const currentDustbin = document.getElementById(boxId);
                const previousDustbin = document.getElementById(boxId-1);
                const currentFlag = currentDustbin.querySelector('.vlag');
                const previousFlag = previousDustbin.querySelector('.vlag');
                const currentStyle = getComputedStyle(currentFlag);
                const previousStyle = getComputedStyle(previousFlag);
                console.log(currentStyle.display);

                if( currentStyle.display == "none" && previousStyle.display == "block") {
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
            touchdragover: monitor.isOver({ shallow: true }),
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

   const showFiche = (id) => {
    console.log(id);
    const kidObj = JSON.parse(sessionStorage.getItem('selected-kid'));
    const fiches = kidObj.fiches;
    var vraag1 = "";
    var vraag2 = "";
    //console.log(fiches);

    fiches.forEach(fiche => {
        if (fiche.fiche_data.positionById == id) {
            vraag1 = fiche.fiche_data.vraag1;
            vraag2 = fiche.fiche_data.vraag2;
        }else if(fiche.fiche_data.optionConvo = true) {
            console.log("er is een opinion in " +id)
            setOpinionBtnOpacity(1);
        }
    });
    //console.log(vraag1);
    setHasFlag(true);
    setShortDescription(vraag1);
    
    var mountainPoint = document.getElementById(id);
    //mountainPoint.getElementsByClassName("textBox").innerHTML= inhoud;
    //console.log(textbox);
    
    
    } 

    const imageClick = (id) => {
    console.log('Click');
    setHasDropped(false);
    } 

    const opinionBtnCall = (id , value) => {
        //console.log(kidObj);
        var kidId = kidObj._id; 
        var positionById = id.id;
        var fiches = kidObj.fiches;

        const newFiche = fiches.map((fiche) => {
            if (fiche.fiche_data.positionById == id) {
                fiche.fiche_data.optionConvo = value;
                console.log(fiche)
            }
            return fiche;
          })
        
        updateMountainFiche(fiches, kidId, newFiche, positionById)
			.then(() => {
				updateSelectedKidData();
			});
    } 

    function getKidFiches(){
    
        const kidObj = JSON.parse(sessionStorage.getItem('selected-kid'));
        const fiches = kidObj.fiches;
        console.log(fiches);
    
        fiches.forEach(fiche => {
            if ('positionById' in fiche.fiche_data && fiche.fiche_data.positionById == id) {
                //document.getElementById("vlag-"+id).style.display = "block";
                var vlag = document.getElementById("vlag-"+id);
                if (vlag != null) {
                    vlag.style.display = "block";
                    //document.getElementsByClassName("mountainPath-"+id).style.stroke="red";
                    var mountainPath = document.getElementById("mountainPath-"+id);
                    var mountainLine = document.getElementById("mountainLine-"+id);
                    //console.log(mountainPath);
                    mountainPath != null && mountainPath.setAttribute('stroke', '#DF222A');
                    mountainLine != null && mountainLine.setAttribute('stroke', '#DF222A');
                    //mountainPath.setAttribute('stroke', '#ff0000');
                }
            }
           
        });
    
    }

    useEffect(() => {
        getKidFiches();
      }, []); // <-- empty array means 'run once'

    console.log(hasFlag);
    return (

        <div id={id} ref={drop} className='mountainPoint' style={getStyle(backgroundColor , x , y)}>
        
        <img id={"vlag-"+id} src={vlag} alt="vlag" className="vlag" onClick={() => showFiche(id)}></img>

        {hasFlag==true && 
        <span id={'span-'+id}>
            <div className="textBox opinionBox">
                <h1>Gesprek {id}</h1>
                <img src={cross} alt="Close Pop-up" className="cross" onClick={() => setHasFlag(false)}></img>
                <h4>Beschrijving</h4>
                {shortDescription}
                <h4>Hoe vond je dit gesprek?</h4>
                <img src={like} alt="like_btn" className="opinionBtn opinionBtn_left" style={{opacity: opinionBtnOpacity }} onClick={() => opinionBtnCall(id , true)}></img>
                <img src={dislike} alt="dislike_btn" className="opinionBtn opinionBtn_right" onClick={() => opinionBtnCall(id , false)}></img>
            </div>            
        </span>}

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
