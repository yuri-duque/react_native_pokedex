import {StatusBar as RNStatusBar, StyleSheet, View} from 'react-native';

export const StatusBar = () => {
  const backgroundColor = '#000000';  
  const barStyle = 'light-content';

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
