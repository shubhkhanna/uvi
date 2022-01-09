import {View, Text, Pressable, Image} from 'react-native';
import HeaderItem from '../Post/HeaderItem';
import Footer from '../Post/Footer';
import styles from './styles';

const DetailHeader = ({data, setIsVisible, setWebViewVisible}) => {
  return (
    <View style={styles.headerContainer}>
      <HeaderItem
        thumbnail={data.thumbnail}
        domain={data.domain}
        created_utc={data.created_utc}
        subreddit_name_prefixed={data.subreddit_name_prefixed}
      />

      {/* Title & Description */}
      <View>
        <Text style={styles.postTitle}>{data.title}</Text>

        {data.selftext !== '' && (
          <Text style={styles.selfText}>{data.selftext}</Text>
        )}

        {/* Image */}
        {data.post_hint === 'image' ? (
          <Pressable onPress={() => setIsVisible(true)}>
            <Image
              source={{uri: data.url}}
              style={styles.image}
              resizeMode="contain"
            />
          </Pressable>
        ) : (
          <Pressable onPress={() => setWebViewVisible(true)}>
            <Text style={styles.url}>{data.url}</Text>
          </Pressable>
        )}
      </View>

      <Footer
        ups={data.ups}
        downs={data.downs}
        num_comments={data.num_comments}
      />
    </View>
  );
};

export default DetailHeader;
