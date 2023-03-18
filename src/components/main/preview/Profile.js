import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../../../images/defaultAvatar.png';
import '../../../styles/profile.scss';

function Profile(props) {
  const avatar = props.avatar === '' ? defaultAvatar : props.avatar;

  return (
    <div className="profile">
      <div
        className="profile__avatar"
        style={{ backgroundImage: `url(${avatar})` }}
        // <img className="image" src={avatar} alt="" />;
      ></div>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;
