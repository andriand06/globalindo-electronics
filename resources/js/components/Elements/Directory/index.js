import React, {useEffect, useState} from 'react'
import axios from 'axios'
import MenuItem from '../MenuItem';
import '../Directory/index.scss';
const Directory = () => {
    const [sections, setSections ] = useState([]);

    useEffect(() => {
        axios.get('/api/collections')
            .then(res => {
                 setSections(res.data.data.data) 
                })
    },[]);

    return(
            sections.length > 0 && (
                <div className="directory-menu">
                {
                    sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
            ) 
    );
}

export default Directory;