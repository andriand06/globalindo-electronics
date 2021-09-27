import React from 'react'
import "../Profile/index.scss"
import { connect } from 'react-redux';
import toggleProfileHidden from '../../../redux/profile/profile.action';
const Profile = ({toggleProfileHidden}) => (
    <i className="gg-profile" onClick={toggleProfileHidden}>
    </i>
);

const mapDispatchToProps = dispatch => ({
    toggleProfileHidden : () => dispatch(toggleProfileHidden())
})
export default connect(null,mapDispatchToProps)(Profile);