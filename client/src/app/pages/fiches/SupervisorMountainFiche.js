
import './fiches.scss'
import React, { Component } from 'react';
import './SupervisorMountainFiche.scss';
import { Nav } from '../../components';
import { MountainContainer } from '../../components';

//const Draggable = ReactDraggable;
/*
const HTML5toTouch = {
	backends: [
	  {
		backend: HTML5Backend
	  },
	  {
		backend: TouchBackend({enableMouseEvents: true}), // Note that you can call your backends with options
		preview: true,
		transition: TouchTransition
	  }
	]
  };*/


class SupervisorMountainFiche extends Component {
  constructor(props) {
    super(props)
    this.state = { position: { x:0, y:0 }}
  }
  

  render() {

	return ( 
		<div>
			<Nav />
			<div>
			<MountainContainer />
			</div>
		</div>  
	)
  }
}

export default SupervisorMountainFiche
