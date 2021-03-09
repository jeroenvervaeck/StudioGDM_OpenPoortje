import React, { Component } from 'react';
import { Dustbin } from './Dustbin';
import { Box } from './Box';
import {ReactComponent as MountainBG} from './BERGBG.svg';
import {ReactComponent as MountainPath} from './Bergpad.svg';
import MountainAnimation from './BERG-ANIMATIES.gif';
import mannetje from './WIGGLING.gif';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from 'react-dnd-touch-backend';
import MultiBackend, {
  TouchTransition,
  Preview
} from "react-dnd-multi-backend";
import './mountain.scss';

class MountainContainer extends Component {
	constructor(props) {
	  super(props)
	  this.state = { 
		leftPos: 50,
		rightPos:-195, 
		PointPos : [
			[380, 466],
			[585, 360],
			[365, 372],
			[195, 302],
			[340, 303],
			[430, 260],
			[335, 190],
			[405, 160],
			[340, 115],
			[380, 95],
			],
	  }
	  this.handler = this.handler.bind(this)
	}

	handler(left,top) {
		console.log(left,top);
		this.setState({
			leftPos: left,
			rightPos: top,
		})
	}
  
	render() {
		const HTML5toTouch = {
			backends: [
			  {
				backend: HTML5Backend,
				preview: true,
				
			  },
			  {
				backend: TouchBackend, // Note that you can call your backends with options
				preview: true,
				transition: TouchTransition
				// skipDispatchOnTransition: true
			  }
			]
		};

		const generatePreview = ({ itemType, item, style }) => {
			const newStyle = {
			  ...style,
			  background: "transparent"
			};
			return <div style={newStyle}><img src={mannetje} alt="mannetje" className="mannetje" width="50px"></img></div>;
		};
	
	  return ( 
		<div id="mountainContainer">
		<DndProvider backend={MultiBackend} options={HTML5toTouch}>
			
		<div style={{ overflow: 'hidden', clear: 'both' }}>
		<MountainPath />
		<img src={MountainAnimation} alt="mountain" className="mountainAnimation"></img>
		<Dustbin id={0} position={this.state.PointPos[0]} handler = {this.handler} onDragEnter={console.log('je bent gedropt')} onHit={console.log('je bent er boven')}></Dustbin>
		<Dustbin id={1} position={this.state.PointPos[1]} handler = {this.handler}></Dustbin>
		<Dustbin id={2} position={this.state.PointPos[2]} handler = {this.handler}></Dustbin>
		<Dustbin id={3} position={this.state.PointPos[3]} handler = {this.handler}></Dustbin>
		<Dustbin id={4} position={this.state.PointPos[4]} handler = {this.handler}></Dustbin>
		<Dustbin id={5} position={this.state.PointPos[5]} handler = {this.handler}></Dustbin>
		<Dustbin id={6} position={this.state.PointPos[6]} handler = {this.handler}></Dustbin>
		<Dustbin id={7} position={this.state.PointPos[7]} handler = {this.handler}></Dustbin>
		<Dustbin id={8} position={this.state.PointPos[8]} handler = {this.handler}></Dustbin>
		<Dustbin id={9} position={this.state.PointPos[9]} handler = {this.handler}></Dustbin> 
		</div>

		<Box left={this.state.leftPos} top={this.state.rightPos} ></Box>
		<Preview>{generatePreview}</Preview>
		</DndProvider>
		</div>  
	  )
	}
} 
export default MountainContainer
