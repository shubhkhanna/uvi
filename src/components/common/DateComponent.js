import {Text} from 'native-base';
import moment from 'moment';

const DateComponent = () => {
  return (
    <Text fontSize="lg" marginTop={3} marginBottom={5} alignSelf={'center'}>
      <Text bold>{moment(new Date()).format('dddd, ')}</Text>
      {moment(new Date()).format('D MMMM')}
    </Text>
  );
};

export default DateComponent;
