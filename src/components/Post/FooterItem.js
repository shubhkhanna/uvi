import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../theme';
import styles from './styles';

const FooterItem = ({name, text}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Icon name={name} size={18} color={colors.grey} />
      <Text style={[styles.subreddit, {color: colors.grey}]}>
        {`\t${text}`}
      </Text>
    </View>
  );
};

export default FooterItem;
