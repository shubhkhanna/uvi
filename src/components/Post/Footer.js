import {View, Text} from 'react-native';
import numFormat from '../../helpers/numberFormatter';
import FooterItem from './FooterItem';
import styles from './styles';

const Footer = ({ups, downs, num_comments}) => {
  return (
    <View style={styles.footerWrapper}>
      {/* Vote */}
      <View style={styles.voteWrapper}>
        {/* UpVote */}
        <FooterItem name="arrow-up-bold-outline" text={numFormat(ups)} />

        <Text>{'\t\t'}</Text>

        {/* Downs */}
        <FooterItem name="arrow-down-bold-outline" text={numFormat(downs)} />
      </View>

      {/* Comments */}
      <View style={styles.commentWrapper}>
        <FooterItem name="comment-outline" text={numFormat(num_comments)} />
      </View>
    </View>
  );
};

export default Footer;
