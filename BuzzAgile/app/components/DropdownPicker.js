// @flow
import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Text,
} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  pickerViewStyle: {
    position: 'absolute',
    marginLeft: 20,
    borderRadius: 3,
  },
  dropdownIcon: {
    position: 'absolute',
    height: 10,
    width: 10,
    right: 0,
  },
  dropDownStyle: {
    height: 40,
  },
  rowSubView: {
    flex: 1,
    padding: 7,
  },
  textStyle: {
    color: 'white',
    fontSize: 14,
  },
});

class DropdownPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowPicker: false,
      width: window.width,
      // selectedData: this.props.pickerDatas.length ? this.props.pickerDatas[0].name : '',
    };
  }

  onCellSelectionPress(data) {
    this.props.onCellSelectionPress(data);
    this.setState({ selectedData: data.name, isShowPicker: !this.state.isShowPicker });
  }

  getDefaultRow(data) {
    return (
      <View style={[styles.rowSubView]} >
        <Text style={[styles.textStyle, this.props.textStyle]}>
          {data.name}
        </Text>
      </View>
    );
  }

  getRenderRow(data) {
    let cellView = null;
    if (this.props.getPickerViewRow !== undefined) {
      cellView = this.props.getPickerViewRow(data);
    } else {
      cellView = this.getDefaultRow(data);
    }
    return (
      <TouchableOpacity
        onPress={() => {
          this.onCellSelectionPress(data);
        }}
      >
        {cellView}
      </TouchableOpacity>
    );
  }

  render() {
    const {
      pickerViewStyle,
      textStyle,
      dropdownIcon,
      dropDownStyle,
    } = this.props;
    const containerHeight = this.state.isShowPicker ? pickerViewStyle.height : 120;
    return (
      <View style={[styles.pickerViewStyle, { width: this.state.width - 40 }, pickerViewStyle, { height: containerHeight }]}>
        {
          <FlatList
            data={this.props.pickerDatas}
            extraData={this.state}
            keyExtractor={item => item.name}
            renderItem={data => this.getRenderRow(data.item)}
            showsHorizontalScrollIndicator={Boolean(false)}
          />
        }
      </View>
    );
  }
}

export default DropdownPicker;

// <DropdownPicker
// pickerDatas={this.state.bottomOptions}
// onCellSelectionPress={selectedItem => this.onCellSelectionPress(selectedItem)}
// pickerViewStyle={{width: 200, height: 150}}
// dropdownIcon={require("../Images/dropdown-arrow.png")}
// />
