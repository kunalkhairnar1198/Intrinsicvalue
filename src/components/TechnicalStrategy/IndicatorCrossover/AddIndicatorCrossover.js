import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {TextInput} from 'react-native-paper';

import responsive from '../../../utils/responsive';
import {COLORS} from '../../../constants/theme';

import CustomCard from '../../UI/Card';
import CustomDropdown from '../../DropDown/CustomDropdown';
import CustomCircleCheckbox from '../../CheckBox/CustomCircleCheckbox';
import Button from '../../Button/Button';
import AddIcon from 'react-native-vector-icons/Entypo';
import RemoveIcon from 'react-native-vector-icons/MaterialIcons';

const options = [
  {label: 'Positive / Buy', value: 'buy'},
  {label: 'Negative / Sell', value: 'sell'},
];

const comparisonOptions = [
  {label: 'Greater than', value: '>'},
  {label: 'Less than', value: '<'},
  {label: 'Equal to', value: '==='},
];

const AddIndicatorCrossover = ({indicators, onHandleSave}) => {
  const [columns, setColumns] = useState([
    {
      buySellIndicator: null,
      selectIndicator: null,
      comparisonSelect: null,
      useCustomValue: false,
      crossOverIndicator: null,
      textInput: '',
    },
  ]);

  const dropdownOptions = indicators.map(item => ({
    label: item.indicator_name,
    value: item.alternate_indicator_name,
  }));

  const addColumn = () => {
    setColumns([
      ...columns,
      {
        buySellIndicator: null,
        selectIndicator: null,
        comparisonSelect: null,
        useCustomValue: false,
        crossOverIndicator: null,
        textInput: '',
      },
    ]);
  };

  const removeColumn = index => {
    const updated = [...columns];
    updated.splice(index, 1);
    setColumns(updated);
  };

  const updateColumn = (index, key, value) => {
    const updated = [...columns];
    updated[index][key] = value;
    setColumns(updated);
  };

  const SubmitHandler = () => {
    const payload = columns.map(col => ({
      buy_sale: col.buySellIndicator,
      crossover_indicator: col.selectIndicator,
      crossover_condition: col.comparisonSelect,
      custom_value_status: col.useCustomValue,
      when_indicator: col.useCustomValue
        ? col.textInput
        : col.crossOverIndicator,
    }));

    onHandleSave(payload);
    // console.log('Saved Data:', payload);

    setColumns([
      {
        buySellIndicator: null,
        selectIndicator: null,
        comparisonSelect: null,
        useCustomValue: false,
        crossOverIndicator: null,
        textInput: '',
      },
    ]);
  };

  return (
    <>
      {columns.map((col, index) => (
        <View key={index}>
          <CustomCard style={styles.card}>
            {columns.length > 1 && (
              <Pressable
                style={styles.removeButton}
                onPress={() => removeColumn(index)}>
                <RemoveIcon
                  name="highlight-remove"
                  size={30}
                  color={COLORS.primary}
                />
              </Pressable>
            )}
            <View style={styles.cardContainer}>
              {/* Action */}
              <View style={styles.section}>
                <CustomDropdown
                  data={options}
                  value={col.buySellIndicator}
                  onChange={item =>
                    updateColumn(index, 'buySellIndicator', item.value)
                  }
                  placeholder="Select Action"
                  dropdownStyle={styles.dropdownHalf}
                  containerStyle={styles.dropdownContainer}
                />
              </View>

              {/* Condition Line */}
              <Text style={styles.label}>When</Text>
              <View style={styles.row}>
                <CustomDropdown
                  data={dropdownOptions}
                  value={col.selectIndicator}
                  onChange={item =>
                    updateColumn(index, 'selectIndicator', item.value)
                  }
                  placeholder="Base Indicator"
                  dropdownStyle={styles.dropdownFull}
                  containerStyle={styles.dropdownContainer}
                />
                <CustomDropdown
                  data={comparisonOptions}
                  value={col.comparisonSelect}
                  onChange={item =>
                    updateColumn(index, 'comparisonSelect', item.value)
                  }
                  placeholder="Comparison"
                  dropdownStyle={styles.dropdownFull}
                  containerStyle={styles.dropdownContainer}
                />
              </View>

              {/* Cross-over Section */}
              <Text style={styles.label}>Compare Against</Text>
              <View style={styles.row}>
                <View style={styles.rowItem}>
                  <CustomCircleCheckbox
                    checked={!col.useCustomValue}
                    onPress={() => updateColumn(index, 'useCustomValue', false)}
                    activeColor={COLORS.primary}
                  />
                  <CustomDropdown
                    data={dropdownOptions}
                    value={col.crossOverIndicator}
                    onChange={item =>
                      updateColumn(index, 'crossOverIndicator', item.value)
                    }
                    placeholder="Cross"
                    disabled={col.useCustomValue}
                    dropdownStyle={styles.dropdownFull}
                    containerStyle={styles.dropdownContainer}
                  />
                </View>

                <View style={styles.rowItem}>
                  <CustomCircleCheckbox
                    checked={col.useCustomValue}
                    onPress={() => updateColumn(index, 'useCustomValue', true)}
                    activeColor={COLORS.primary}
                  />
                  <TextInput
                    mode="outlined"
                    placeholder="Enter Value"
                    style={styles.input}
                    onChangeText={value =>
                      updateColumn(index, 'textInput', value)
                    }
                    value={col.textInput}
                    keyboardType="numeric"
                    outlineColor={COLORS.primary}
                    disabled={!col.useCustomValue}
                    activeOutlineColor={COLORS.primary}
                  />
                </View>
              </View>
            </View>
          </CustomCard>
        </View>
      ))}

      <Button style={styles.addButton} onPress={addColumn}>
        <AddIcon name="plus" size={25} color="white" />
      </Button>

      <Button style={styles.saveButton} onPress={SubmitHandler}>
        <Text style={styles.saveButtonText}>Save Technical Strategy</Text>
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    margin: responsive.margin(5),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  cardContainer: {
    padding: responsive.padding(20),
  },
  label: {
    fontSize: responsive.fontSize(14),
    marginVertical: responsive.margin(8),
  },
  section: {
    marginBottom: responsive.margin(12),
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: responsive.margin(12),
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  dropdownHalf: {
    width: '100%',
    height: responsive.height(42),
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: responsive.borderRadius(8),
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  dropdownFull: {
    flex: 1,
    height: responsive.height(42),
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: responsive.borderRadius(8),
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  dropdownContainer: {
    borderRadius: responsive.borderRadius(8),
  },
  input: {
    flex: 1,
    height: responsive.height(42),
    fontSize: responsive.fontSize(14),
    backgroundColor: '#fff',
  },
  removeButton: {
    alignSelf: 'flex-end',
    margin: responsive.margin(10),
    backgroundColor: 'white',
  },
  addButton: {
    alignSelf: 'center',
    margin: responsive.margin(10),
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: responsive.padding(10),
    borderRadius: responsive.borderRadius(8),
    marginTop: responsive.margin(20),
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: responsive.fontSize(14),
  },
});

export default AddIndicatorCrossover;
