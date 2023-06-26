import {StyleSheet, Text} from 'react-native';
import Colors from '../constants/colors';

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
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
});
