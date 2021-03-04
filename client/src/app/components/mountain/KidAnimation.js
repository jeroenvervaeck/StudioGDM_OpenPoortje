import React from 'react';
import { AdobeAn, createjs } from './KID_HTML_CANVAS.js?1611933293348';

export const KidAnimation = () => {

    var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
	function init() {
		canvas = document.getElementById("canvas");
		anim_container = document.getElementById("animation_container");
		dom_overlay_container = document.getElementById("dom_overlay_container");
		var comp=AdobeAn.getComposition("77A50E01E9DC4841A0DA2284619D8B4F");
		var lib=comp.getLibrary();
		handleComplete({},comp);
	}
	function handleComplete(evt,comp) {
		//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
		var lib=comp.getLibrary();
		var ss=comp.getSpriteSheet();
		exportRoot = new lib.KID_HTML5Canvas();
		stage = new lib.Stage(canvas);	
		//Registers the "tick" event listener.
		fnStartAnimation = function() {
			stage.addChild(exportRoot);
			createjs.Ticker.framerate = lib.properties.fps;
			createjs.Ticker.addEventListener("tick", stage);
		}	    
		//Code to support hidpi screens and responsive scaling.
		AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
		AdobeAn.compositionLoaded(lib.properties.id);
		fnStartAnimation();
	}

    return (
    <div ref={drag} onload={init()} style={{ ...style, left, top }}>
		<div id="animation_container" style="background-color:rgba(255, 255, 255, 1.00); width:150px; height:450px">
			<canvas id="canvas" width="150" height="450" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas>
			<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:150px; height:450px; position: absolute; left: 0px; top: 0px; display: block;"></div>
		</div>
	</div>);
};

