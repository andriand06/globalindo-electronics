import React from 'react'

const NotFound = ({history}) => {
    return (
        <div className="text-center">
            <h1 className="clr-primary">OOPS!</h1>
            <p>We Can't Seem To Find The Page You're Looking For.</p>
            <button className="primary-button" onClick={() => history.push('/')}>Back</button>
        </div>
    );
}

export default NotFound;