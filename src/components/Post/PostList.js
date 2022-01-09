import {View, FlatList} from 'react-native';
import PostListItem from './PostListItem';
import styles from './styles';

const PostList = ({category, item}) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={category ? item.filter(i => i.data.subreddit === category) : item}
        keyExtractor={item => item.data.id}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{paddingBottom: 40}}
        renderItem={({item}) => <PostListItem data={item.data} />}
      />
    </View>
  );
};

export default PostList;
