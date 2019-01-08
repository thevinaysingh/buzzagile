import * as Colors from './colors';

export const containerStyles = {
  defaultContainer: {
    flex: 1,
    backgroundColor: Colors.primarybackgroundColor,
  },
  promoCodeContainer: {
    container: {
      backgroundColor: Colors.primarybackgroundColor,
      marginHorizontal: 10,
      padding: 10,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'stretch',
    },
    text: {
      fontSize: 14,
      fontWeight: '500',
      color: 'white',
    },
    nextLogo: {
      width: 20,
      height: 20,
      alignSelf: 'center',
    },
  },
};

export const labelStyles = {
  defaultWhiteLabel: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
    padding: 2.5,
  },
  largeWhiteLabel: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
  },
};

export const buttonStyles = {
  // TODO: Button styles
};

export const iconStyles = {
  defaultIcon: {
    width: 20,
    height: 20,
    margin: 5,
  },
};
