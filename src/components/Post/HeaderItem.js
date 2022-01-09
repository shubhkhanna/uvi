import {View, Text, Image} from 'react-native';
import moment from 'moment';
import {colors} from '../../theme';
import styles from './styles';

const HeaderItem = ({
  thumbnail,
  created_utc,
  subreddit_name_prefixed,
  domain,
}) => {
  return (
    <View style={styles.headerWrapper}>
      {/* Thumbnail */}
      {thumbnail && (
        <Image
          source={{uri: thumbnail}}
          style={{width: 20, height: 20, borderRadius: 10, marginRight: 5}}
        />
      )}

      {/* Subreddit Tag */}
      <Text style={styles.subreddit}>{subreddit_name_prefixed} </Text>

      {/* Time */}
      <Text style={[styles.subreddit, {color: colors.grey}]}>
        {'\u2022'} {moment(created_utc).format('h[h]')}{' '}
      </Text>

      {/* Domain */}
      {domain && (
        <Text style={[styles.subreddit, {color: colors.grey}]}>
          {'\u2022'} {domain}
        </Text>
      )}
    </View>
  );
};

export default HeaderItem;
