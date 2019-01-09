import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import ContextMenu from './ContextMenu';
import ContextMenuButton from './ContextMenuButton';
import { cameraPicker, galleryPicker } from './ImagePickerComponent';

class ChooseImagePopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onPopupItemClick(index) {
    this.props.isShowPopupDialog(false);
    if (index === 0) {
      cameraPicker(((uri, multipartBody) => this.props.setAvaterSource(uri, multipartBody)), 'avatar');
    } else if (index === 1) {
      galleryPicker(((uri, multipartBody) => this.props.setAvaterSource(uri, multipartBody)), 'avatar');
    } else if (index === 2) {
      this.props.setAvaterSource('DeleteImage', '');
    }
  }

  render() {
    return (
      <ContextMenu
        cancelButtonAction={() => this.onPopupItemClick(-1)}
      >
        <ContextMenuButton
          text="Take Photo"
          action={() => this.onPopupItemClick(0)}
        />
        <ContextMenuButton
          text="Choose Photo"
          action={() => this.onPopupItemClick(1)}
        />
        { this.props.isHaveImage &&
          <View>
            <ContextMenuButton
              text="Delete Photo"
              altTextColor
              action={() => this.onPopupItemClick(2)}
            />
          </View>
        }
      </ContextMenu>
    );
  }
}

ChooseImagePopup.propTypes = {
  setAvaterSource: PropTypes.func,
  isShowPopupDialog: PropTypes.func,
  isHaveImage: PropTypes.bool,
};

ChooseImagePopup.defaultProps = {
  setAvaterSource: () => {},
  isShowPopupDialog: () => {},
  isHaveImage: false,
};

export default ChooseImagePopup;
