import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../theme';

const styles = StyleSheet.create({
  listContainer: {
    marginBottom: 15,
    marginLeft: 10,
  },
  itemContainer: {
    marginRight: 10,
    borderRadius: 15,
    height: 30,
    borderWidth: 1,
    borderColor: colors.black,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  text: {
    fontSize: fonts.lg,
    textTransform: 'capitalize',
  },
});

export default styles;
