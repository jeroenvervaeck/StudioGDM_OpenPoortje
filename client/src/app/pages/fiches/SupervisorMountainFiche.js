
import './fiches.scss'
import React, { Component } from 'react';
import Draggable, { ControlPosition } from 'react-draggable'; // The default
import './SupervisorMountainFiche.scss';
import { Nav } from '../../components';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { MountainContainer } from '../../components'

//const Draggable = ReactDraggable;

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
      		<DndProvider backend={HTML5Backend}>
				<MountainContainer />
			</DndProvider>
			</div>
		</div>  
	)
  }
}

export default SupervisorMountainFiche
