import React, {Component} from 'react'
import MenuItem from '../MenuItem/index'
import "../Directory/index.scss"
import SECTIONS_DATA from '../../data/sections.data'
export default class Directory extends Component {
    constructor(){
        super();

        this.state = {
            sections : SECTIONS_DATA
        }
    }
    render(){
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
    }
}
