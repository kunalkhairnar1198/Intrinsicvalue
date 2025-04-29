import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {COLORS} from '../../constants/theme';

import Button from '../Button/Button';
import responsive from '../../utils/responsive';
import Loader from '../Loader/Loader';

import PlusIcon from 'react-native-vector-icons/FontAwesome5';

const SearchInput = ({
  value,
  onChangeText,
  placeholderTextColor = '#646262a7',
  placeholder = 'Search By name and symbol',
  outlineStyle,
  mode = 'outlined',
  showButton = true,
  handleAddNewStockToWatchList,
  buttonTitle,
  inputLoader,
  searchData,
}) => {
  // console.log(searchData);
  return (
    <>
      <View style={styles.searchContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          mode={mode}
          style={styles.searchInput}
          outlineStyle={{
            borderRadius: responsive.borderRadius(8),
            borderColor: COLORS.primary,
            ...outlineStyle,
          }}
          left={<TextInput.Icon icon="magnify" color={COLORS.primary} />}
          right={inputLoader && <Loader size="small" color={COLORS.primary} />}
        />
        {showButton && (
          <Button
            style={styles.addStockButton}
            onPress={handleAddNewStockToWatchList}>
            <View style={styles.addStockContent}>
              <PlusIcon name="plus" color={'white'} size={18} />
              <Text style={styles.addStockText}>{buttonTitle}</Text>
            </View>
          </Button>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsive.margin(10),
    gap: responsive.padding(15),
  },
  searchInput: {
    width: responsive.width(240),
    height: responsive.height(42),
    backgroundColor: '#fff',
    borderRadius: responsive.borderRadius(12),
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    fontSize: 14,
    // paddingHorizontal: 10,
    justifyContent: 'center',
  },
  addStockButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: responsive.padding(12),
    paddingVertical: responsive.padding(10),
    borderRadius: responsive.borderRadius(10),
    justifyContent: 'center',
  },
  addStockContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  addStockText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: responsive.fontSize(14),
    marginLeft: 6,
  },
});

export default SearchInput;
