// ES6 module syntax
import LocalizedStrings from 'react-native-localization';
import { images } from '../assets/images';

export const appLocalizeStrings = new LocalizedStrings({
  // English
  en: {
    serverErrorMessage: 'The request failed due to an internal error.',
    noInternetConnection: {
      header: 'No Internet Connection Available',
      message: 'Please check your internet connection.',
    },
    emptyRecordMessage: 'Not Found Record.',
    firstNameErrorMsg: 'Please enter first name.',
    lastNameErrorMsg: 'Please enter last name.',
    emailErrorMsg: 'Your e-mail is incorrect.',
    usernameErrorMsg: 'Please enter user name.',
    passwordErrorMsg: 'Please enter atleast 6-digit password.',
    passwordMismatchErrorMsg: 'Your password and confirmation passowrd do not match.',
    dateofbirthErrorMsg: 'You must be over 18 to register.',
    messageText: 'Message',
    internalLoginErrorMsg: 'There is some issue while uploading.\nPlease login again.',
    takePhoto: 'Take Photo',
    choosePhoto: 'Choose Photo',
    deletePhoto: 'Delete Photo',

    // Images
    appLogo: images.appLogo,

  },
  // German
  de: {
    serverErrorMessage: 'Die Anfrage ist aufgrund eines internen Fehlers fehlgeschlagen.',
    noInternetConnection: {
      header: 'Keine Internetverbindung verfügbar',
      message: 'Bitte überprüfe deine Internetverbindung.',
    },
    emptyRecordMessage: 'Nicht gefundener Datensatz.',
    messageText: 'Botschaft',
    internalLoginErrorMsg: 'Beim Hochladen ist ein Problem aufgetreten. \ NBitte erneut anmelden.',
    firstNameErrorMsg: 'Bitte geben Sie den Vornamen ein.',
    lastNameErrorMsg: 'Bitte geben Sie den Nachnamen ein.',
    emailErrorMsg: 'Ihre E-Mail-Adresse ist falsch.',
    usernameErrorMsg: 'Bitte geben sie einen Benutzernamen ein.',
    passwordErrorMsg: 'Bitte geben Sie ein mindestens 6-stelliges Passwort ein.',
    passwordMismatchErrorMsg: 'Ihr Passwort und Ihr Passwort stimmen nicht überein.',
    dateofbirthErrorMsg: 'Sie müssen über 18 Jahre alt sein, um sich zu registrieren.',

    // Images
    appLogo: images.frAppLogo,
  },
  // French
  fr: {
    serverErrorMessage: 'Die Anfrage ist aufgrund eines internen Fehlers fehlgeschlagen.',
    noInternetConnection: {
      header: 'Keine Internetverbindung verfügbar',
      message: 'Bitte überprüfe deine Internetverbindung.',
    },
    messageText: 'Botschaft',
    internalLoginErrorMsg: 'Beim Hochladen ist ein Problem aufgetreten. \ NBitte erneut anmelden.',
    emptyRecordMessage: 'Nicht gefundener Datensatz.',
    firstNameErrorMsg: 'Bitte geben Sie den Vornamen ein.',
    lastNameErrorMsg: 'Bitte geben Sie den Nachnamen ein.',
    emailErrorMsg: 'Ihre E-Mail-Adresse ist falsch.',
    usernameErrorMsg: 'Bitte geben sie einen Benutzernamen ein.',
    passwordErrorMsg: 'Bitte geben Sie ein mindestens 6-stelliges Passwort ein.',
    passwordMismatchErrorMsg: 'Ihr Passwort und Ihr Passwort stimmen nicht überein.',
    dateofbirthErrorMsg: 'Sie müssen über 18 Jahre alt sein, um sich zu registrieren.',

    // Images
    appLogo: images.frAppLogo,
  },
  // Spanish
  es: {
    serverErrorMessage: 'Die Anfrage ist aufgrund eines internen Fehlers fehlgeschlagen.',
    noInternetConnection: {
      header: 'Keine Internetverbindung verfügbar',
      message: 'Bitte überprüfe deine Internetverbindung.',
    },
    messageText: 'Botschaft',
    internalLoginErrorMsg: 'Beim Hochladen ist ein Problem aufgetreten. \ NBitte erneut anmelden.',
    emptyRecordMessage: 'Nicht gefundener Datensatz.',
    firstNameErrorMsg: 'Bitte geben Sie den Vornamen ein.',
    lastNameErrorMsg: 'Bitte geben Sie den Nachnamen ein.',
    emailErrorMsg: 'Ihre E-Mail-Adresse ist falsch.',
    usernameErrorMsg: 'Bitte geben sie einen Benutzernamen ein.',
    passwordErrorMsg: 'Bitte geben Sie ein mindestens 6-stelliges Passwort ein.',
    passwordMismatchErrorMsg: 'Ihr Passwort und Ihr Passwort stimmen nicht überein.',
    dateofbirthErrorMsg: 'Sie müssen über 18 Jahre alt sein, um sich zu registrieren.',

    // Images
    appLogo: images.frAppLogo,
  },
  // Italian
  it: {
    serverErrorMessage: 'Die Anfrage ist aufgrund eines internen Fehlers fehlgeschlagen.',
    noInternetConnection: {
      header: 'Keine Internetverbindung verfügbar',
      message: 'Bitte überprüfe deine Internetverbindung.',
    },
    messageText: 'Botschaft',
    internalLoginErrorMsg: 'Beim Hochladen ist ein Problem aufgetreten. \ NBitte erneut anmelden.',
    emptyRecordMessage: 'Nicht gefundener Datensatz.',
    firstNameErrorMsg: 'Bitte geben Sie den Vornamen ein.',
    lastNameErrorMsg: 'Bitte geben Sie den Nachnamen ein.',
    emailErrorMsg: 'Ihre E-Mail-Adresse ist falsch.',
    usernameErrorMsg: 'Bitte geben sie einen Benutzernamen ein.',
    passwordErrorMsg: 'Bitte geben Sie ein mindestens 6-stelliges Passwort ein.',
    passwordMismatchErrorMsg: 'Ihr Passwort und Ihr Passwort stimmen nicht überein.',
    dateofbirthErrorMsg: 'Sie müssen über 18 Jahre alt sein, um sich zu registrieren.',

    // Images
    appLogo: images.frAppLogo,
  },
  // Portuguese
  pt: {
    serverErrorMessage: 'Die Anfrage ist aufgrund eines internen Fehlers fehlgeschlagen.',
    noInternetConnection: {
      header: 'Keine Internetverbindung verfügbar',
      message: 'Bitte überprüfe deine Internetverbindung.',
    },
    messageText: 'Botschaft',
    internalLoginErrorMsg: 'Beim Hochladen ist ein Problem aufgetreten. \ NBitte erneut anmelden.',
    emptyRecordMessage: 'Nicht gefundener Datensatz.',
    firstNameErrorMsg: 'Bitte geben Sie den Vornamen ein.',
    lastNameErrorMsg: 'Bitte geben Sie den Nachnamen ein.',
    emailErrorMsg: 'Ihre E-Mail-Adresse ist falsch.',
    usernameErrorMsg: 'Bitte geben sie einen Benutzernamen ein.',
    passwordErrorMsg: 'Bitte geben Sie ein mindestens 6-stelliges Passwort ein.',
    passwordMismatchErrorMsg: 'Ihr Passwort und Ihr Passwort stimmen nicht überein.',
    dateofbirthErrorMsg: 'Sie müssen über 18 Jahre alt sein, um sich zu registrieren.',

    // Images
    appLogo: images.frAppLogo,
  },
});
