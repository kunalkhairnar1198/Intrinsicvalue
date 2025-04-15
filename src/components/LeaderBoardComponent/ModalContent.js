import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import CustomModal from '../Modal/CustomModal';

const ModalContent = ({visible, users, onClose}) => {
  return (
    <CustomModal visible={visible} onClose={onClose}>
      <View>
        <Text style={styles.title}>Other Users</Text>
        {users.map((u, i) => (
          <Text key={i} style={styles.user}>
            {u.first_name}
          </Text>
        ))}
      </View>
    </CustomModal>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  user: {
    fontSize: 16,
    marginVertical: 2,
  },
});

export default ModalContent;
