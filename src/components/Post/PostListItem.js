import {View, Text, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HeaderItem from './HeaderItem';
import Footer from './Footer';
import styles from './styles';

const PostListItem = ({data}) => {
  const navigation = useNavigation();

  const {
    title,
    subreddit_name_prefixed,
    created_utc,
    domain,
    url,
    ups,
    downs,
    num_comments,
    post_hint,
    thumbnail,
  } = data;

  return (
    <Pressable
      style={styles.itemContainer}
      onPress={() => navigation.navigate('Details', {data})}>
      {/* Post Header */}
      <HeaderItem
        thumbnail={thumbnail}
        domain={domain}
        created_utc={created_utc}
        subreddit_name_prefixed={subreddit_name_prefixed}
      />

      {/* Post Title & Image */}
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>{title}</Text>

        {/* Image */}
        {post_hint === 'image' && (
          <Image
            source={{uri: url}}
            style={{
              width: 75,
              height: 75,
            }}
            resizeMode="contain"
          />
        )}
      </View>

      {/* Ups & downs & comments */}
      <Footer ups={ups} downs={downs} num_comments={num_comments} />
    </Pressable>
  );
};

export default PostListItem;
