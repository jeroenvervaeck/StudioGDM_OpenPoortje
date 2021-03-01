
import React, { Component } from 'react';

import './SupervisorTestFiche.scss'

import { Nav } from '../../components'
import { Board } from '../../components/'


class SupervisorTestFiche extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.onClear = this.onClear.bind(this)
    }

    onClear(){
        this.setState({})
    }

    render() { 
        return ( 
            <div>
				<Nav />
				<div>
				<Board clearTrigger={this.state}/>
				</div>
			</div>
        );
    }
}
 
export default SupervisorTestFiche;