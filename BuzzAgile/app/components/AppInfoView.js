import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Animated,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  WebView,
  Image,
  ActivityIndicator
} from 'react-native';
import { images } from '../assets/images';
import CustomVideoPlayer from './CustomVideoPlayer';

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
  hostessView: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  oddsExpertView: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  bettingPalView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  newsView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },


  infoTextViewLeft: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    width: width / 3.5,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 25,
    borderRightColor: 'transparent',
    opacity: 0.7,
  },
  infoViewTextLeft: {
    color: 'white',
    fontSize: 11,
    marginTop: 5,
    // fontFamily: 'RobotoCondensed-Bold',
    textAlign: 'left',
  },

  infoTextViewRight: {
    position: 'absolute',
    bottom: 20,
    right: 0,
    width: width / 3.5,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 25,
    borderLeftColor: 'transparent',
    opacity: 0.7,
  },
  infoViewTextRight: {
    color: 'white',
    fontSize: 11,
    marginTop: 5,
    // fontFamily: 'RobotoCondensed-Bold',
    textAlign: 'right',
  },

  closeButton: {
    position: 'absolute',
    padding: 10,
    alignItems: 'flex-end',
    right: 5,
    top: 5,
  },
  activityIndicatorViewStyle: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },  
});


class AppInfoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingStart: true,
    };

    this.state.isWindowOpen = false;

    this.state.hostessWidth = new Animated.Value(width / 2);
    this.state.hostessHeight = new Animated.Value(height / 6);
    this.state.hostessZIndex = 0;
    this.state.showHostessVideo = false;

    this.state.oddExpertWidth = new Animated.Value(width / 2);
    this.state.oddExpertHeight = new Animated.Value(height / 6);
    this.state.oddExpertZIndex = 0;

    this.state.bettingPalWidth = new Animated.Value(width / 2);
    this.state.bettingPalHeight = new Animated.Value(height / 6);
    this.state.bettingPalZIndex = 0;

    this.state.newsWidth = new Animated.Value(width / 2);
    this.state.newsHeight = new Animated.Value(height / 6);
    this.state.newsZIndex = 0;
    this.state.showWidget = false;
  }

  performAnimation(selectedBlock) {
    switch (selectedBlock) {
      case 'hostess':
        if (!this.state.isWindowOpen) {
          this.setState({ hostessZIndex: 4, oddExpertZIndex: 0, bettingPalZIndex: 0, newsZIndex: 0, isWindowOpen: true }, () => {
            Animated.parallel([
              Animated.timing(this.state.hostessWidth, { toValue: width, duration: 400 }),
              Animated.timing(this.state.hostessHeight, { toValue: height / 3, duration: 400 }),
            ]).start(() => {
              this.setState({ showHostessVideo: true });
            });
          });
        } else {
          // Animated.parallel([
          //   Animated.timing(this.state.hostessWidth, { toValue: width / 2, duration: 400 }),
          //   Animated.timing(this.state.hostessHeight, { toValue: height / 6, duration: 400 }),
          // ]).start(() => {
          //   this.setState({ hostessZIndex: 0, oddExpertZIndex: 0, bettingPalZIndex: 0, newsZIndex: 0, isWindowOpen: false });
          // });
        }
        break;

      case 'oddExpert':
        if (!this.state.isWindowOpen) {
          this.setState({ hostessZIndex: 0, oddExpertZIndex: 4, bettingPalZIndex: 0, newsZIndex: 0, isWindowOpen: true }, () => {
            Animated.parallel([
              Animated.timing(this.state.oddExpertWidth, { toValue: width, duration: 400 }),
              Animated.timing(this.state.oddExpertHeight, { toValue: height / 3, duration: 400 }),
            ]).start();
          });
        } else {
          Animated.parallel([
            Animated.timing(this.state.oddExpertWidth, { toValue: width / 2, duration: 400 }),
            Animated.timing(this.state.oddExpertHeight, { toValue: height / 6, duration: 400 }),
          ]).start(() => {
            this.setState({ hostessZIndex: 0, oddExpertZIndex: 0, bettingPalZIndex: 0, newsZIndex: 0, isWindowOpen: false });
          });
        }
        break;

      case 'bettingPal':
        if (!this.state.isWindowOpen) {
          this.setState({ hostessZIndex: 0, oddExpertZIndex: 0, bettingPalZIndex: 4, newsZIndex: 0, isWindowOpen: true }, () => {
            Animated.parallel([
              Animated.timing(this.state.bettingPalWidth, { toValue: width, duration: 400 }),
              Animated.timing(this.state.bettingPalHeight, { toValue: height / 3, duration: 400 }),
            ]).start();
          });
        } else {
          Animated.parallel([
            Animated.timing(this.state.bettingPalWidth, { toValue: width / 2, duration: 400 }),
            Animated.timing(this.state.bettingPalHeight, { toValue: height / 6, duration: 400 }),
          ]).start(() => {
            this.setState({ hostessZIndex: 0, oddExpertZIndex: 0, bettingPalZIndex: 0, newsZIndex: 0, isWindowOpen: false });
          });
        }
        break;

      case 'news':
        if (!this.state.isWindowOpen) {
          this.setState({ hostessZIndex: 0, oddExpertZIndex: 0, bettingPalZIndex: 0, newsZIndex: 4, isWindowOpen: true }, () => {
            Animated.parallel([
              Animated.timing(this.state.newsWidth, { toValue: width, duration: 400 }),
              Animated.timing(this.state.newsHeight, { toValue: height / 3, duration: 400 }),
            ]).start(() => {
              this.setState({ showWidget: true });
            });
          });
        } else {
          // this.setState({ showWidget: false }, () => {
          //   Animated.parallel([
          //     Animated.timing(this.state.newsWidth, { toValue: width / 2, duration: 400 }),
          //     Animated.timing(this.state.newsHeight, { toValue: height / 6, duration: 400 }),
          //   ]).start(() => {
          //     this.setState({ hostessZIndex: 0, oddExpertZIndex: 0, bettingPalZIndex: 0, newsZIndex: 0, isWindowOpen: false });
          //   });
          // });
        }
        break;

      default:
        break;
    }
  }

  closeHostessVideo() {
    this.setState({ showHostessVideo: false }, () => {
      Animated.parallel([
        Animated.timing(this.state.hostessWidth, { toValue: width / 2, duration: 400 }),
        Animated.timing(this.state.hostessHeight, { toValue: height / 6, duration: 400 }),
      ]).start(() => {
        this.setState({ hostessZIndex: 0, oddExpertZIndex: 0, bettingPalZIndex: 0, newsZIndex: 0, isWindowOpen: false });
      });
    });
  }

  closeWidget() {
    this.setState({ showWidget: false,  isLoadingStart: true }, () => {
      Animated.parallel([
        Animated.timing(this.state.newsWidth, { toValue: width / 2, duration: 400 }),
        Animated.timing(this.state.newsHeight, { toValue: height / 6, duration: 400 }),
      ]).start(() => {
        this.setState({ hostessZIndex: 0, oddExpertZIndex: 0, bettingPalZIndex: 0, newsZIndex: 0, isWindowOpen: false });
      });
    });
  }

  endLoading() {
    this.setState({
      isLoadingStart: false,
    });
  }

  render() {
    if (this.state.showWidget) {
      return (
        <View style={{ width, height: height / 3 }}>
          <WebView
            source={{ uri: 'http://csdev.betradar.com/ls/widgets/?/avantage/en/page/lmts#matchId=11830160' }}
            style={{ width, height: height / 3 }}
            onLoadEnd={() => this.endLoading()}
          />
           {this.state.isLoadingStart && <View style={[styles.activityIndicatorViewStyle, {width: width, height: height / 3 }]}>
              <ActivityIndicator size="large" color="black" />
            </View>}
          <TouchableOpacity style={[styles.closeButton]} onPress={() => this.closeWidget()}>
            <Image source={images.closeButton} style={{ width: 20, height: 20 }} />
          </TouchableOpacity>
        </View>
      );
    }

    if (this.state.showHostessVideo) {
      return (
        <View style={{ width, height: height / 3 }}>
          <CustomVideoPlayer
            source="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            width={width}
            height={height / 3}
            onClose={() => this.closeHostessVideo()}
          />
        </View>
      );
    }
    return (
      <View style={{ flexDirection: 'row', width, height: height / 3 }}>
        <Animated.View
          style={[styles.hostessView, {
            width: this.state.hostessWidth,
            height: this.state.hostessHeight,
            zIndex: this.state.hostessZIndex,
          }]}
        >
          <TouchableOpacity activeOpacity={1} style={{ flex: 1 }} onPress={() => this.performAnimation('hostess')} >
            {!this.state.showHostessVideo &&
              <Animated.Image source={images.hostess} style={{ width: this.state.hostessWidth, height: this.state.hostessHeight }} resizeMode="cover" >
                <View style={styles.infoTextViewLeft}>
                  <Text numberOfLines={1} style={styles.infoViewTextLeft}>HOSTESS</Text>
                </View>
              </Animated.Image>}
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          style={[styles.oddsExpertView, {
            width: this.state.oddExpertWidth,
            height: this.state.oddExpertHeight,
            zIndex: this.state.oddExpertZIndex,
          }]}
        >
          <TouchableOpacity activeOpacity={1} style={{ flex: 1 }} onPress={() => this.performAnimation('oddExpert')} >
            <Animated.Image source={images.expert} style={{ width: this.state.oddExpertWidth, height: this.state.oddExpertHeight }} resizeMode="cover" >
              <View style={styles.infoTextViewRight}>
                <Text numberOfLines={1} style={styles.infoViewTextRight}>ODDS EXPERT</Text>
              </View>
            </Animated.Image>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          style={[styles.bettingPalView, {
            width: this.state.bettingPalWidth,
            height: this.state.bettingPalHeight,
            zIndex: this.state.bettingPalZIndex,
          }]}
        >
          <TouchableOpacity activeOpacity={1} style={{ flex: 1 }} onPress={() => this.performAnimation('bettingPal')} >
            <Animated.Image source={images.betting} style={{ width: this.state.bettingPalWidth, height: this.state.bettingPalHeight }} resizeMode="cover" >
              <View style={styles.infoTextViewLeft}>
                <Text numberOfLines={1} style={styles.infoViewTextLeft}>BETTING PAL</Text>
              </View>
            </Animated.Image>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          style={[styles.newsView, {
            width: this.state.newsWidth,
            height: this.state.newsHeight,
            zIndex: this.state.newsZIndex,
          }]}
        >
          <TouchableOpacity activeOpacity={1} style={{ flex: 1 }} onPress={() => this.performAnimation('news')} >
            {!this.state.showWidget &&
              <Animated.Image source={images.news} style={{ width: this.state.newsWidth, height: this.state.newsHeight }} resizeMode="cover" >
                <View style={styles.infoTextViewRight}>
                  <Text numberOfLines={1} style={styles.infoViewTextRight}>NEWS</Text>
                </View>
              </Animated.Image>
            }
            
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

AppInfoView.propTypes = {

};

AppInfoView.defaultProps = {

};

export default AppInfoView;
