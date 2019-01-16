import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground
} from 'react-native';

// import { 14, responsiveFontSize } from '../../../utils/utils_functions';
// import Loader from '../../../components/Loader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    height: 180,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ImageViewContainer = (props) => {
  return (
    <View style={styles.container}>
      <View style={{borderRadius: 10, justifyContent: 'flex-end', alignSelf: 'center', height: 150, width: 150 }}>
        <TouchableOpacity
          style={{position: 'absolute', bottom: 0, height: 150, width: 152, padding: 5 }}
          // onPress={() => props.isShowPopupDialog()}
        >
          <ImageBackground
            source={ props.profileImage }
            style={{ borderRadius: 10, justifyContent: 'flex-end', alignSelf: 'center', height: 150, width: 150 }}
          // style={ styles.roundedbuttonStyle }
          />
        </TouchableOpacity>
      </View> 
    </View>
  );
};

ImageViewContainer.propTypes = {
};

ImageViewContainer.defaultProps = {
};

export default ImageViewContainer;
