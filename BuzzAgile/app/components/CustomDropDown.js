import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import { images } from '../assets/images';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  screenContainer: {
    width,
    height,
    backgroundColor: '#00000090',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  touchableContianer: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    width: width * 0.80,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F2F2F2',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'lightgrey',
    marginHorizontal: 5,
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  categoryInfoView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectCategoryText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    // fontFamily: 'RobotoCondensed-Bold',
    marginVertical: 3,
  },
  categoryName: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
    marginVertical: 3,
  },
  closeView: {
    position: 'absolute',
    right: 4,
    top: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeTouchable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  closeText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '400',
    // fontFamily: 'RobotoCondensed-Regular',
  },

  listContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: '#F2F2F2',
    backgroundColor: 'white',
  },
  listStyle: {
    alignSelf: 'stretch',
    maxHeight: height * 0.70,
  },
  rowStyle: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#F2F2F2',
    backgroundColor: 'white',
  },
  rowText: {
    flex: 1,
    color: 'black',
    fontSize: 18,
    textAlign: 'left',
    // fontFamily: 'RobotoCondensed-Regular',
    marginRight: 5,
  },
  favoriteView: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: 'lightgrey',
    borderRadius: 20
  },
  favoriteImage: {
    width: 18,
    height: 18,
    marginHorizontal: 5
  },
});

const CustomDropDown = props => (
  <View style={styles.screenContainer}>
    <TouchableOpacity
      activeOpacity={1}
      style={styles.touchableContianer}
      onPress={() => props.close()}
    >
      <View style={styles.mainContainer}>
        <View style={styles.topView}>
          <View style={styles.categoryInfoView}>
            <Text
              style={styles.selectCategoryText}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {props.title}
            </Text>
          </View>
          <View style={styles.closeView}>
            <TouchableOpacity
              onPress={() => props.close()}
              style={styles.closeTouchable}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            style={styles.listStyle}
            data={props.listData}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => props.onSelectOption(item)}
              >
                <View style={[styles.rowStyle, { paddingVertical: props.canShowFavorites ? 5 : 10 }]}>
                  <Text
                    style={styles.rowText}
                    numberOfLines={3}
                    lineBreakMode="tail"
                  >{item.name}
                  </Text>
                  {props.canShowFavorites &&
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => props.toggleFavoriteState(item)}
                  >
                    <View style={styles.favoriteView}>
                      <Image source={item.favourite ? images.favoriteIcon : images.unfavoriteIcon} style={styles.favoriteImage} resizeMode="contain" />
                    </View>
                  </TouchableOpacity>}
                </View>
              </TouchableOpacity>
            )}
            onEndReachedThreshold={0.4}
            onEndReached={() => {
              if (!props.isLoading) {
                props.loadMore();
              }
            }}
            ListFooterComponent={() => (
              props.isLoading ? <ActivityIndicator
                animating={props.isLoading}
                size="large"
                color="grey"
              /> : null
            )}
          />
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

CustomDropDown.propTypes = {
  title: PropTypes.string,
  listData: PropTypes.arrayOf(PropTypes.any),
  onSelectOption: PropTypes.func,
  canShowFavorites: PropTypes.bool,
  toggleFavoriteState: PropTypes.func,
  close: PropTypes.func,
  isLoading: PropTypes.bool,
  loadMore: PropTypes.func,
};

CustomDropDown.defaultProps = {
  title: 'Please select an option',
  listData: [],
  onSelectOption: () => {},
  canShowFavorites: false,
  toggleFavoriteState: () => {},
  close: () => {},
  isLoading: false,
  loadMore: () => {},
};

export default CustomDropDown;
