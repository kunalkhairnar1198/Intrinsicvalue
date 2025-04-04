import {useMemo} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import responsive from '../../utils/responsive';

const CustomBottomSheetModal = ({bottomSheetRef, snapPoints, children}) => {
  const defaultSnapPoints = useMemo(
    () => snapPoints || ['40%', '50%', '75%'],
    [snapPoints],
  );

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      snapPoints={defaultSnapPoints}
      enableDismissOnClose={true}
      dismissOnBackdropPress={true}
      backdropComponent={({style}) => (
        <TouchableWithoutFeedback
          onPress={() => bottomSheetRef.current?.dismiss()}>
          <View style={[style, styles.backdrop]} />
        </TouchableWithoutFeedback>
      )}>
      <BottomSheetView style={styles.container}>{children}</BottomSheetView>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: responsive.padding(10),
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
  },
});

export default CustomBottomSheetModal;
