import {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';

import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';

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
      backdropComponent={({style}) => <View style={[style, styles.backdrop]} />}
      dismissOnBackdropPress={true}>
      <BottomSheetView style={styles.container}>{children}</BottomSheetView>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default CustomBottomSheetModal;
