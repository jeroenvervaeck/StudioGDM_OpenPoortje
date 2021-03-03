
import React, { Component } from 'react';
import { MountainGesprek } from '../../components'
import './SupervisorBergGesprek.scss'


class SupervisorBergGesprek extends Component {
    
    render() { 
        
        return ( 
        <div>
            <MountainGesprek id={this.props.location.state} />
		</div>
        );
    }
}
 
export default SupervisorBergGesprek;