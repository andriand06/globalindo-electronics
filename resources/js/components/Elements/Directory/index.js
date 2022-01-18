import React, {useEffect, useState} from 'react'
import axios from 'axios'
import MenuItem from '../MenuItem';
import { DirectoryMenuContainer } from './DirectoryMenu.styles';
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
                <DirectoryMenuContainer>
                    {
                         sections.map(({id, ...otherSectionProps}) => (
                            <MenuItem key={id} {...otherSectionProps} />
                        ))
                    }
                </DirectoryMenuContainer>
            ) 
    );
}
export default Directory;