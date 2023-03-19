import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../../../images/defaultAvatar.png';
import '../../../styles/mixins.scss';
import '../../../styles/App.scss';

function GetAvatar(props) {
  const fr = new FileReader();

  const myFileField = React.createRef();

  const uploadImage = (ev) => {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];

      fr.addEventListener('load', getImage);

      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    const image = fr.result;

    props.updateAvatar(image);
  };

  const avatar = props.avatar === '' ? defaultAvatar : props.avatar;
  return (
    <div className="buttons-img">
      <label className="btn">
        {props.value}
        <input
          type="file"
          ref={myFileField}
          className="hidden"
          onChange={uploadImage}
        />
      </label>

      <div
        className="hidden"
        style={{ backgroundImage: `url(${avatar})` }}
      ></div>
    </div>
  );
}

GetAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};

export default GetAvatar;
