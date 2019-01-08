import { Component } from 'react';
import { AsyncStorage, NetInfo } from 'react-native';
import { showPopupAlert } from './showAlert';

class Utils extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async getItemWithKey(key, action) {
    try {
      const data = await AsyncStorage.getItem(key);
      const parsedData = JSON.parse(data);
      action(parsedData);
    } catch (error) {
      action(null);
    }
  }

  async setItemWithKeyAndValue(key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      return false;
    }
  }

  async deleteItem(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log('error', error);
    }
  }


  checkInternetConnectivity(action) {
    NetInfo.isConnected.fetch().then((isConnected) => {
      action(isConnected);
    });
  }

  static formatDate(dateString) {
    const date = new Date(dateString);
    const monthNames = [
      'Jan', 'Feb', 'Mar',
      'Apr', 'May', 'Jun', 'Jul',
      'Aug', 'Sep', 'Oct',
      'Nov', 'Dec',
    ];
    const day = date.getDate() < 10 ? ['0', date.getDate()].join('') : date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const dateArray = [day, monthNames[monthIndex]];
    const finalDate = dateArray.join(' ');
    return finalDate.toString();
  }

  static formatTime(dateString) {
    const date = new Date(dateString);
    const finalHour = date.getHours().toString().length < 2 ? `0${date.getHours()}` : date.getHours();
    const finalMinutes = date.getMinutes().toString().length < 2 ? `0${date.getMinutes()}` : date.getMinutes();
    return `${finalHour}:${finalMinutes}`;
  }

  /* isSuccessAPICall: To check server api call is success or not, using server response
  isLoading: API call is finished or in-progress
  serverResponse: server response
  resetDataInStore: for reseting the data in store corresponding reducer
  */
  isStatusAPICall(isLoading, serverResponse, resetDataInStore) {
    const APIStatus = {
      SUCCESS: 1,
      FAILED: 0,
      LOADING: -1,
    };
    let apiStatus = APIStatus.LOADING;
    if (!isLoading
      && serverResponse
      && serverResponse.response
      && serverResponse.status
      && serverResponse.status >= 200
      && serverResponse.status <= 300) {
      apiStatus = APIStatus.SUCCESS;
    }
    if (!isLoading
      && serverResponse
      && serverResponse.response
      && serverResponse.status
      && serverResponse.status >= 400) {
      if (serverResponse.response.message
        && typeof serverResponse.response.message === 'string') {
        showPopupAlert(serverResponse.response.message);
        if (resetDataInStore !== undefined) {
          resetDataInStore();
        }
        apiStatus = APIStatus.FAILED;
      } else {
        if (resetDataInStore !== undefined) {
          resetDataInStore();
        }
        apiStatus = APIStatus.FAILED;
      }
    }
    return apiStatus;
  }

  fetchSportCode(sportList, selectedSport) {
    let code = '';
    console.log('**********', sportList);
    console.log('**********', selectedSport);

    for (let i = 0; i < sportList.length; i += 1) {
      if (sportList[i].name === selectedSport) {
        code = sportList[i].id;
      }
    }
    return code;
  }

}
export default Utils;
