import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../theme';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    backgroundColor: colors.white,
  },
  postTitle: {
    fontSize: fonts.xxl,
    fontWeight: 'bold',
    marginVertical: 10,
    color: colors.black,
    textTransform: 'capitalize',
  },
  selfText: {
    fontSize: fonts.lg,
    color: colors.grey,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 10,
  },
  url: {
    fontSize: fonts.lg,
    color: colors.primary,
    marginBottom: 15,
  },
});

export default styles;
