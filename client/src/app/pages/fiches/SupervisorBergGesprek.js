
import React, { Component } from 'react';

import './SupervisorBergGesprek.scss'

import { Nav } from '../../components'

class SupervisorBergGesprek extends Component {

    render() { 
        return ( 
        <div>
				  <Nav />
          <div class="gesprek-container"></div>
		    </div>
        );
    }
}
 
export default SupervisorBergGesprek;