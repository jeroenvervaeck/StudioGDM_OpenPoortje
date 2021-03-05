
import './fiches.scss'
import React, { Component } from 'react';
import Draggable, { ControlPosition } from 'react-draggable'; // The default
import './SupervisorMountainFiche.scss';
import { Nav } from '../../components';
import { DndProvider } from 'react-dnd';
import { usePreview } from 'react-dnd-preview';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import MultiBackend, { TouchTransition } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
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
      		<DndProvider backend={MultiBackend} options={HTML5toTouch}>
				<MountainContainer />
			</DndProvider>
			</div>
		</div>  
	)
  }
}

export default SupervisorMountainFiche
