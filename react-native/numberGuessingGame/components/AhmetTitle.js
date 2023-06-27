import {StyleSheet, Text, Platform} from 'react-native';

const AhmetTitle = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default AhmetTitle;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Open Sans',
    fontWeight: 700,
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({
      ios: 0,
      android: 2,
    }),
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
    minWidth: 300,
  },
});
