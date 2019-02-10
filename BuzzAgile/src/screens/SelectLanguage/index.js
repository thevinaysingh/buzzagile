import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { StackActions, NavigationActions } from 'react-navigation';
import RoundedButton from 'components/RoundedButton';
import Logo from 'components/Logo';
import { DefaultLabel, RootContainer, FlexContainerCenteredChild } from 'components/AppStyledComponents';
import { screens } from 'navigator/screens-name';
import { Dimens } from 'theme';
import * as Storage from 'utils/storage';
import { CONSTANTS } from 'utils/constants';

const languages = [
  {
    label: 'English',
    value: 'en',
  },
];

const styles = StyleSheet.create({
  popupContainer: {
    width: Dimens.getViewportWidth(),
    height: Dimens.getViewportHeight(),
    position: 'absolute',
    backgroundColor: '#00000050',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    height: Dimens.getViewportHeight() / 3,
    width: Dimens.getViewportWidth() - 100,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 20,
    alignSelf: 'center',
  },
  text: {
    color: 'darkgrey',
    marginVertical: 40,
  },
});

class SelectLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: '',
      showPopup: false,
    };
  }

  onSelectLanguage(lang, index) {
    console.log('Selected Language : ', languages[index]);
    this.setState({
      language: lang.label,
      showPopup: false,
    });

    Storage.setItemWithKeyAndValue(CONSTANTS.KEYS.APP_LANGUAGE, lang.value);
    Storage.setItemWithKeyAndValue(CONSTANTS.KEYS.APP_NOT_OPEN_FIRST_TIME, true);
    const resetAction = StackActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({ routeName: screens.WELCOME }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  renderSelectLangPopup() {
    return (
      <TouchableOpacity
        style={ styles.popupContainer }
        onPress={ () => this.setState({ showPopup: false }) }
      >
        <ScrollView contentContainerStyle={ styles.popupBody }>
          <View style={ styles.listContainer }>
            <DefaultLabel style={{ fontWeight: '600', fontSize: 18 }}>
              Choose one option
            </DefaultLabel>
            {
              languages.map((l, i) => (
                <TouchableOpacity
                  key={ `lang${i}` }
                  style={{ padding: 15 }}
                  onPress={ () => this.onSelectLanguage(l, i) }
                >
                  <DefaultLabel> { l.label }</DefaultLabel>
                </TouchableOpacity>
              ))
            }
          </View>
        </ScrollView>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <RootContainer>
        <FlexContainerCenteredChild>
          <Logo />
        </FlexContainerCenteredChild>
        <FlexContainerCenteredChild
          style={{ justifyContent: 'flex-start' }}
        >
          <RoundedButton
            title={ this.state.language === '' ? 'Select Language' : this.state.language }
            onPress={ () => this.setState({ showPopup: true }) }
          />
        </FlexContainerCenteredChild>
        { this.state.showPopup && this.renderSelectLangPopup() }
      </RootContainer>
    );
  }
}

SelectLanguage.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SelectLanguage;
