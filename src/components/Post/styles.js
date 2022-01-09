import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../theme';

const styles = StyleSheet.create({
  listContainer: {
    marginBottom: 70,
  },
  itemContainer: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    backgroundColor: colors.white,
  },
  headerWrapper: {
    marginVertical: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  subreddit: {
    fontSize: fonts.sm,
    color: colors.black,
  },
  titleWrapper: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  titleText: {
    flex: 1,
    fontSize: fonts.lg,
    color: colors.black,
  },
  footerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 2,
  },
  voteWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  commentWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
