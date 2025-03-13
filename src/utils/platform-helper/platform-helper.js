import { Platform } from 'react-native';

export const getKeyboardAvoidingBehavior = () => {
  return Platform.OS === 'ios' ? 'padding' : 'height';
};
