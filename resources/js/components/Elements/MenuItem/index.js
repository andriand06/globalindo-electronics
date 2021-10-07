import React from 'react'
import "../MenuItem/index.scss";
import { withRouter } from 'react-router-dom'
const MenuItem = ({title, image, size, history, routename}) => {
   return (
        <div className={`${size} menu-item`} onClick={()=> history.push(`/shop/${routename}`)}>
        <div className="background-image" style={{ backgroundImage : `url(${image})`}}/>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
    );
}


export default withRouter(MenuItem);