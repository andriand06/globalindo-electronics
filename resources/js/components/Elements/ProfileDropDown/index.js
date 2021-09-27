import React from 'react'
import "../ProfileDropDown/index.scss"
const ProfileDropdown = () => (
    <div className="profile-detail" id="dropdown-profile">
        <p>{currentUser.displayName}</p>
        <p>{currentUser.email}</p>
        <Link to="" onClick={() => auth.signOut()}>Sign Out</Link>
    </div>
);

export default ProfileDropdown;