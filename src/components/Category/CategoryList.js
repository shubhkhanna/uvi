import {FlatList, View} from 'react-native';
import CategoryListItem from './CategoryListItem';
import styles from './styles';

const CategoryList = ({data, categoryState, setCategoryState}) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.data.id}
        showsHorizontalScrollIndicator={false}
        // List Header Component
        ListHeaderComponent={
          <CategoryListItem
            text="All Stories"
            onPress={() => setCategoryState('')}
            isSelected={categoryState === ''}
          />
        }
        // List Item Component
        renderItem={({item}) => (
          <CategoryListItem
            text={item.data.subreddit}
            onPress={() => setCategoryState(item.data.subreddit)}
            isSelected={categoryState === item.data.subreddit}
          />
        )}
      />
    </View>
  );
};

export default CategoryList;
