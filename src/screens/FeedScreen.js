import axios from 'axios';
import {useLayoutEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Loader from '../components/common/Loader';
import DateComponent from '../components/common/DateComponent';
import CategoryList from '../components/Category/CategoryList';
import PostList from '../components/Post/PostList';
import {colors} from '../theme';

const FeedScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState([]);
  const [category, setCategory] = useState('');

  // Fetch data from Reddit API
  const fetchFeeds = async () => {
    const {data} = await axios.get('https://www.reddit.com/.json');
    // Set data to item state
    setItem(data.data.children);
    // Set loading to false
    setIsLoading(false);
  };

  useLayoutEffect(() => {
    fetchFeeds();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <SafeAreaView style={{backgroundColor: colors.background, flex: 1}}>
          {/* Current date with month and name of the day */}
          <DateComponent />

          {/* Category List */}
          <CategoryList
            data={item.slice(0, 10)}
            setCategoryState={setCategory}
            categoryState={category}
          />

          {/* Post List */}
          <PostList category={category} item={item} />
        </SafeAreaView>
      )}
    </>
  );
};

export default FeedScreen;
