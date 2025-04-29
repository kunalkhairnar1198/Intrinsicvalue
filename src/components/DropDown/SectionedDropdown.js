import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  StyleSheet,
} from 'react-native';

const SectionedDropdown = ({
  data = [],
  value,
  onSelect,
  placeholder = 'Select...',
  modalTitle = 'Select Option',
}) => {
  const [visible, setVisible] = useState(false);

  const handleSelect = item => {
    setVisible(false);
    onSelect(item);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.item} onPress={() => handleSelect(item)}>
      <Text style={styles.itemText}>{item.label || 'Filter By Pattern'}</Text>
    </TouchableOpacity>
  );

  const renderSection = ({item}) => (
    <View>
      <Text style={styles.sectionHeader}>{item.label}</Text>
      <FlatList
        data={item.options}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.toString() || index.toString()}
      />
    </View>
  );

  return (
    <View>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setVisible(true)}>
        <Text style={{color: value ? '#000' : '#aaa'}}>
          {value ? value.label : placeholder}
        </Text>
      </TouchableOpacity>

      <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{modalTitle}</Text>

            <FlatList
              data={data}
              renderItem={renderSection}
              keyExtractor={item => item.label}
            />

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#00000099',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 6,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 15,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default SectionedDropdown;
