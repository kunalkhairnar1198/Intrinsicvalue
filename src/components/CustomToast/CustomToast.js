import Toast from 'react-native-toast-message';
import {toastConfig} from './ToastConfig';

const CustomToast = () => {
  return <Toast config={toastConfig} />;
};

export default CustomToast;
