import {View, Text, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors, fonts} from '../../theme';

const AppHeader = ({subreddit_tag, onPress, isLink}) => {
  return (
    <View style={[styles.container, isLink && {backgroundColor: colors.black}]}>
      <Pressable onPress={onPress}>
        <Icon name="arrowleft" size={28} color={colors.white} />
      </Pressable>

      {subreddit_tag && <Text style={styles.title}>{subreddit_tag}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: fonts.xl,
    color: colors.white,
    fontWeight: 'bold',
    marginLeft: -20,
  },
});

export default AppHeader;
