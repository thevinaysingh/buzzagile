import React, { PureComponent, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Text,
  ActivityIndicator,
  Image,
} from 'react-native';
import Video from 'react-native-video';
import { images } from '../assets/images/';

const styles = StyleSheet.create({
  activityIndicatorViewStyle: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    padding: 10,
    alignItems: 'flex-end',
  },
});

class CustomVideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      paused: false,
      isLoading: true,
    };
  }

  videoAction() {
    if(this.state.paused === false) {
      this.setState({
        paused: true,
      });
    }
    else {
      this.setState({
        paused: false,
      });
    }
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={() => this.videoAction()}>
        <Video
            ref={(ref: Video) => { this.video = ref }}
            source={{ uri: this.props.source}}
            // source={require('./broadchurch.mp4')}
            style={{width: this.props.width, height: this.props.height,}}
            paused={this.state.paused}
            muted={this.props.mute}
            resizeMode='cover'                     // contain | stretch | cover
            onLoad={this.props.onLoad}
            onProgress={data => {
              this.props.onProgress(data);
              this.setState({isLoading: false});
            }}
            onEnd={this.props.onEnd}
            repeat={this.props.repeat}
        />
        <View style={[styles.activityIndicatorViewStyle, {width: this.props.width, height: this.props.height}]}>
          {this.state.isLoading === true ? <ActivityIndicator size="large" color="white" /> :
            this.state.paused && <TouchableOpacity onPress={() => this.videoAction()}><Image source = {images.playButton} style={{width: 50, height: 50}}/></TouchableOpacity>
          }
        </View>
        <TouchableOpacity style={[styles.closeButton, {left: this.props.width - 50,}]} onPress = {() => this.props.onClose()}>
          <Image source = {images.closeButton} style={{width: 20, height: 20}}/>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

CustomVideoPlayer.propTypes = {
  source: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  mute: PropTypes.bool,
  repeat: PropTypes.bool,
  onLoad: PropTypes.func,
  onProgress: PropTypes.func,
  onEnd: PropTypes.func,
  onClose: PropTypes.func,
};

CustomVideoPlayer.defaultProps = {
  source: '',
  width: 100,
  height: 100,
  repeat: false,
  mute: false,
  onLoad: () => {},
  onProgress: () => {},
  onEnd: () => {},
  onClose: () => {},
};

export default CustomVideoPlayer;