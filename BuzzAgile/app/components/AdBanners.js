import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Image, Dimensions, ListView, TouchableOpacity } from 'react-native';
import { images } from '../assets/images';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  bannerList: {
    marginHorizontal: 10,
    marginVertical: 5,
    height: 100,
  },
  bannerContainer: {
    width: width - 20,
    justifyContent: 'center',
  },
});

const dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class AdBanners extends Component {
  constructor(props) {
    super(props);
    let bannersList = [];
    this.timer = null;
    if (props.adsList && props.adsList.length > 0) {
      bannersList = props.adsList;
    }
    this.bannerIndex = -1;
    this.state = {
      bannersList,
    };
  }

  componentDidMount() {
    if (this.state.bannersList.length > 0) {
      this.timer = setInterval(() => {
        if (this.bannerIndex <= this.state.bannersList.length - 2) {
          this.bannerIndex += 1;
          this.bannerListView.scrollTo({
            x: (width - 20) * this.bannerIndex,
            y: 0,
            animated: true,
          });
        } else {
          this.bannerIndex = 0;
          this.bannerListView.scrollTo({
            x: (width - 20) * this.bannerIndex,
            y: 0,
            animated: true,
          });
        }
      }, 2500);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ bannersList: nextProps.adsList });
  }

  componentWillUnmount() {
    if (this.timer !== null) {
      clearInterval(this.timer);
    }
  }

  render() {
    if (this.state.bannersList.length > 0) {
      return (
        <ListView
          style={styles.bannerList}
          dataSource={dataSource.cloneWithRows(this.state.bannersList)}
          horizontal
          enableEmptySections
          showsHorizontalScrollIndicator={Boolean(false)}
          pagingEnabled={Boolean(true)}
          ref={(event) => { this.bannerListView = event; }}
          onScroll={(event) => {
            const floatIndex = event.nativeEvent.contentOffset.x / (width - 20);
            const pageIndex = Math.round(Number(floatIndex));
            this.bannerIndex = pageIndex;
          }}
          renderRow={data => (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => this.props.updateAdClickedEvent(data)}
            >
              <View style={styles.bannerContainer}>
                <Image
                  style={{
                    width: width - 20,
                    height: 40,
                  }}
                  source={{ uri: data }}
                  resizeMode="cover"
                />
              </View>
            </TouchableOpacity>
            )}
        />
      );
    }
    return null;
  }
}

AdBanners.propTypes = {
  adsList: PropTypes.arrayOf(PropTypes.any),
  updateAdClickedEvent: PropTypes.func,
};

AdBanners.defaultProps = {
  adsList: [],
  updateAdClickedEvent: () => {},
};

export default AdBanners;
