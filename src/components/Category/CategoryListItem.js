import {Pressable, Text} from 'react-native';
import {colors} from '../../theme';
import styles from './styles';

const CategoryListItem = ({text, onPress, isSelected}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.itemContainer,
        {backgroundColor: isSelected ? colors.black : null},
      ]}>
      <Text
        style={[
          styles.text,
          {color: isSelected ? colors.white : colors.black},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default CategoryListItem;
