import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

// const styles = StyleSheet.create({
//   image: {
//     width: 320,
//     height: 320,
//   }
// });

// const slides = [
//   {
//     key: 'somethun',
//     title: 'Title 1',
//     text: 'Description.\nSay something cool',
//     image: require('./assets/1.jpg'),
//     imageStyle: styles.image,
//     backgroundColor: '#59b2ab',
//   },
//   {
//     key: 'somethun-dos',
//     title: 'Title 2',
//     text: 'Other cool stuff',
//     image: require('./assets/2.jpg'),
//     imageStyle: styles.image,
//     backgroundColor: '#febe29',
//   },
//   {
//     key: 'somethun1',
//     title: 'Rocket guy',
//     text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
//     image: require('./assets/3.jpg'),
//     imageStyle: styles.image,
//     backgroundColor: '#22bcb5',
//   }
// ];

class Splash extends Component {
  constructor(props) {
    super(props);
    navigatorObject = props.navigation;
    this.state = {
      showRealApp: false
    }
  }
  
  componentDidMount() {
  }
  sideMenuAction() {
      this.setState({ showRealApp: true });
    this.props.navigation.navigate('Home');
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
          <AppIntroSlider slides={slides} onDone={() => this.sideMenuAction()}/>
      </View>
    );
  }
}

export default Splash;
