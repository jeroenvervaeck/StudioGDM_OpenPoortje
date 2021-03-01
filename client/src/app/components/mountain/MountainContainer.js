import React, { Component } from 'react';
import { Dustbin } from './Dustbin';
import { Box } from './Box';
import {ReactComponent as MountainBG} from './BERGBG.svg';
import {ReactComponent as MountainPath} from './Bergpad.svg';
import './mountain.scss'

class MountainContainer extends Component {
	constructor(props) {
	  super(props)
	  this.state = { 
		leftPos: 60,
		rightPos:-120, 
		PointPos : [
			[580, 466],
			[785, 360],
			[565, 372],
			[395, 302],
			[540, 303],
			[630, 260],
			[535, 190],
			[605, 160],
			[540, 115],
			[580, 95],
			],
	  }
	  this.handler = this.handler.bind(this)
	}

	

	handler(left,top) {
		//console.log(left,top);
		this.setState({
			leftPos: left,
			rightPos: top,
		})
	}
  
	render() {
	
	  return ( 
		<div>
			
		<div style={{ overflow: 'hidden', clear: 'both', marginLeft: '200px' }}>
		<MountainPath />
		<Dustbin id={0} position={this.state.PointPos[0]} handler = {this.handler}></Dustbin>
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
		</div>  
	  )
	}
} 
export default MountainContainer
