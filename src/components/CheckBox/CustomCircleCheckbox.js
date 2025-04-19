import React from 'react';
import {CheckBox, Icon} from 'react-native-elements';

const CustomCircleCheckbox = ({
  title,
  checked,
  onPress,
  activeColor = '#007bff',
}) => {
  return (
    <CheckBox
      center
      title={title}
      checked={checked}
      onPress={onPress}
      checkedIcon={
        <Icon
          name="radio-button-checked"
          type="material"
          color={activeColor}
          size={25}
          iconStyle={{marginRight: 2}}
        />
      }
      uncheckedIcon={
        <Icon
          name="radio-button-unchecked"
          type="material"
          color="grey"
          size={25}
          iconStyle={{marginRight: 2}}
        />
      }
      containerStyle={{
        backgroundColor: 'transparent',
        borderWidth: 0,
        shadowColor: 'transparent',
        elevation: 0,
      }}
      textStyle={{color: 'black', fontSize: 14}}
    />
  );
};

export default CustomCircleCheckbox;
