import {StatusBar as RNStatusBar, StyleSheet, View} from 'react-native';
import {StatusBarProps} from './types';

export const StatusBar = ({backgroundColor, barStyle}: StatusBarProps) => {
  return (
    <View style={[styles.statusBar, {backgroundColor}]}>
      <RNStatusBar
        backgroundColor={backgroundColor}
        barStyle={barStyle}
        translucent
        animated={true}
      />
    </View>
  );
};

const STATUSBAR_HEIGHT = RNStatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
