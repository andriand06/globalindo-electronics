import React, {Component} from 'react'
import MenuItem from '../MenuItem/index'
import "../Directory/index.scss"
import SECTIONS_DATA from '../../data/sections.data'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../../redux/directory/directory.selector'
import { extend } from 'laravel-mix'


 const Directory = ({sections}) => (
    <div className="directory-menu">
        {
            sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);