
import React, { Component } from 'react';

import './SupervisorBergGesprek.scss'

import { Nav } from '../../components'
import {ReactComponent as BergGesprekBG} from '../../components/mountain/BergGesprek.svg';

class SupervisorBergGesprek extends Component {

    render() { 
        console.log(this.props.location.state)
        return ( 
        <div>
		    <Nav />
            <BergGesprekBG />
            <div class="gesprek-container">
                <form className="gesprek-inputBox">
                    <label> Waar hebben we rond gepraat en gewerkt? <textarea name="bergGesprek1" rows="4" cols="30" className="berg-gesprek-field" /></label>
                    <label> Wat voel en denk ik hierbij? <textarea name="bergGesprek2" rows="4" cols="30" className="berg-gesprek-field" /></label>
                </form>
            </div>
		</div>
        );
    }
}
 
export default SupervisorBergGesprek;