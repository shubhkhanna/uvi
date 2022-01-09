import {Center, Spinner} from 'native-base';

const Loader = () => {
  return (
    <Center flex={1}>
      <Spinner color="blue" size="lg" />
    </Center>
  );
};

export default Loader;
