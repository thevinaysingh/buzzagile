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
import { images } from 'assets/images';

// import { 14, responsiveFontSize } from '../../../utils/utils_functions';
// import Loader from '../../../components/Loader';

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   // margin: 5,
  //   height: 70,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  container: {
    backgroundColor: 'white',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    height: 85,
  },
  optionalView: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'purple',
    fontSize: 12,
  },
  optionView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    // marginVertical: 15,
  },
  optionContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
  },
});

const NotificationCell = (props) => {
  return (
    <View style={ styles.container }>
      <View style={ styles.optionalView }>
        <View style={ styles.imageContainer }>
          <Image
            source={ images.prize }
            style={{ width: 30, height: 30 }}
          />
        </View>
        <View style={{ flex: 3.5, backgroundColor: 'red' }}>
          <Text style={ styles.textStyle }>
            notification is here this view is for optional text.
          </Text>
        </View>
        <View style={[styles.imageContainer, { flex: 1.5, backgroundColor: 'green' }]}>
          <Image
            source={ images.yelloRupeeButtom }
            style={{ width: 30, height: 30 }}
          />
        </View>
      </View>
      <View style={ styles.optionView }>
        <View style={ styles.optionContainer }>
          <TouchableOpacity
            onPress={() => null}
            style={{ height: 30, width: 50, backgroundColor: 'red' }}
          >
            <Image
              source={ images.yelloRupeeButtom }
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>null }
            style={{ height: 30, width: 50, backgroundColor: 'green', marginRight: 50 }}
          >
            <Image
              source={ images.yelloRupeeButtom }
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

NotificationCell.propTypes = {
};

NotificationCell.defaultProps = {
};

export default NotificationCell;
