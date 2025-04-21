import Toast from 'react-native-toast-message';

const showSuccess = (title = 'Success', message = '') => {
  Toast.show({
    type: 'success',
    text1: title,
    text2: message,
    position: 'top',
    visibilityTime: 5000,
    autoHide: true,
    topOffset: 40,
  });
};

const showError = (title = 'Error', message = '') => {
  Toast.show({
    type: 'error',
    text1: title,
    text2: message,
    position: 'top',
    visibilityTime: 4000,
    autoHide: true,
    topOffset: 40,
  });
};

const showWarning = (title = 'Warning', message = '') => {
  Toast.show({
    type: 'warning',
    text1: title,
    text2: message,
    position: 'top',
    visibilityTime: 3500,
    autoHide: true,
    topOffset: 40,
  });
};

const showTomato = (title = 'Tomato Alert', uuid = '') => {
  Toast.show({
    type: 'tomatoToast',
    text1: title,
    props: {uuid},
    position: 'top',
    visibilityTime: 3500,
    autoHide: true,
    topOffset: 40,
  });
};

export default {
  showSuccess,
  showError,
  showWarning,
  showTomato,
};
