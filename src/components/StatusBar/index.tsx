import {
  Platform,
  StatusBar as RNStatusBar,
  StyleSheet,
  View,
} from 'react-native';
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
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});
