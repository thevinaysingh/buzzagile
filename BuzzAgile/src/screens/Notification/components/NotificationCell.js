import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { images } from 'assets/images';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
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
    width,
    flexDirection: 'row',
    marginVertical: 15,
  },
  optionContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: width - 50,
  }
});

const NotificationCell = props => (
  props.isOptional ?
    <View style={styles.container}>
      <View style={styles.optionalView}>
        <View style={[styles.imageContainer, { flex: 1 }]}>
          <Image
            source={images.prize}
            style={{ width: 30, height: 30 }}
          />
        </View>
        <View style={{ flex: 3.5 }}>
          <Text style={styles.textStyle}>
            notification is here this view is for optional text.
          </Text>
        </View>
        <View style={[styles.imageContainer, { flex: 1.5 }]}>
          <Image
            source={images.yelloRupeeButtom}
            // style={{ width: 30, height: 30 }}
          />
        </View>
      </View>
      <View style={styles.optionView}>
        <View style={styles.optionContainer}>
          <TouchableOpacity
            onPress={() => null}
          >
            <Image
              source={images.yelloRupeeButtom}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>null }
          >
            <Image
              source={images.yelloRupeeButtom}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View> :
    <View style={styles.optionalView}>
      <View style={[styles.imageContainer, { flex: 1 }]}>
        <Image
          source={images.prize}
          style={{ width: 30, height: 30 }}
        />
      </View>
      <View style={{ flex: 3.5 }}>
        <Text style={styles.textStyle}>
          notification is here this view is for optional text.
        </Text>
      </View>
      <View style={[styles.imageContainer, { flex: 1.5 }]}>
        <Image
          source={images.yelloRupeeButtom}
          // style={{ width: 30, height: 30 }}
        />
      </View>
    </View>
);

NotificationCell.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  onPressMenuItem: PropTypes.func,
  isOptional: PropTypes.bool,
  notification: PropTypes.bool,
};

NotificationCell.defaultProps = {
  label: 'Label missing',
  icon: '',
  onPressMenuItem: undefined,
  isOptional: false,
  notification: true,
};

export default NotificationCell;
