import React from 'react';
import CustomModal from './CustomModal';
import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../constants/theme';

const ConfirmModal = ({message, visible, onClose, onConfirm}) => {
  return (
    <CustomModal visible={visible} onClose={onClose}>
      {/* Message Text */}
      <Text
        style={{
          fontSize: 17,
          fontWeight: '600',
          color: '#333',
          textAlign: 'center',
          marginBottom: 25,
        }}>
        {message}
      </Text>

      {/* Buttons Row */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          gap: 12,
        }}>
        {/* Yes Button */}
        <TouchableOpacity
          onPress={onConfirm}
          style={{
            flex: 1,
            backgroundColor: COLORS.red || 'red',
            paddingVertical: 12,
            borderRadius: 8,
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: 16}}>
            Yes
          </Text>
        </TouchableOpacity>

        {/* No Button */}
        <TouchableOpacity
          onPress={onClose}
          style={{
            flex: 1,
            backgroundColor: COLORS.primary || 'blue',
            paddingVertical: 12,
            borderRadius: 8,
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: 16}}>
            No
          </Text>
        </TouchableOpacity>
      </View>
    </CustomModal>
  );
};

export default ConfirmModal;
