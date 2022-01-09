import {useState} from 'react';
import {colors} from '../theme';
import {View, SafeAreaView, FlatList, Modal} from 'react-native';
import AppHeader from '../components/common/AppHeader';
import ImageView from 'react-native-image-viewing';
import DetailHeader from '../components/Detail/DetailHeader';
import {WebView} from 'react-native-webview';
import {useNavigation, useRoute} from '@react-navigation/native';

const DetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {subreddit_name_prefixed, url} = route.params.data;

  const [visible, setIsVisible] = useState(false);
  const [webViewVisible, setWebViewVisible] = useState(false);

  return (
    <SafeAreaView>
      {/* Back header */}
      <AppHeader
        onPress={() => navigation.goBack()}
        subreddit_tag={subreddit_name_prefixed}
      />

      {/* Content */}
      <View style={{marginBottom: 50}}>
        <FlatList
          // data={route.params}
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <DetailHeader
              data={route.params.data}
              setIsVisible={setIsVisible}
              setWebViewVisible={setWebViewVisible}
            />
          }
          contentContainerStyle={{paddingBottom: 50}}
        />
      </View>

      {/* Image Viewer */}
      <ImageView
        visible={visible}
        images={[{uri: url}]}
        imageIndex={0}
        animationType="slide"
        backgroundColor={colors.black}
        onRequestClose={() => setIsVisible(false)}
      />

      {/* Web View */}
      <Modal animationType="slide" visible={webViewVisible} transparent={true}>
        <AppHeader isLink onPress={() => setWebViewVisible(false)} />
        <WebView
          source={{uri: url}}
          style={{width: '100%', height: '100%'}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default DetailScreen;
