import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ avatar, onClick }) => (
  <div className="form-avatar-container" onClick={onClick}>
    {avatar ? <img src={avatar} /> : null}
  </div>
);

Avatar.propTypes = {
  avatar: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Avatar;
