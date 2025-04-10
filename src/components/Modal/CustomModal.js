import React from 'react';
import {Modal, TouchableOpacity, View, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';
import {Text} from 'react-native-paper';
import CloseIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomModal = ({visible, onClose, children, width = 300}) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent, {width}]}>
          {onClose && (
            <TouchableOpacity style={styles.modalButton} onPress={onClose}>
              <CloseIcon name="close-thick" color="red" size={25} />
            </TouchableOpacity>
          )}
          <View>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000059',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
  },
  modalButton: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CustomModal;
