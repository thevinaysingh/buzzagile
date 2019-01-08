import Constant from '../config/appConfig';

var Ably = require('ably');

var ably;

export const getRealtimeConnectionFromAbly = () => {
    if (!ably){
        ably = new Ably.Realtime(Constant.ABLY_API_KEY);  
    }
    return ably;
  };

  export const getRestConnectionFromAbly = () => {
    if (!ably) {
        ably = new Ably.Rest(Constant.ABLY_API_KEY);
    }
    return ably;
  };