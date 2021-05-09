import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {SafeAreaView, ToastAndroid} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Hero} from '../../models/Hero';
import {ApiService} from '../../services/ApiService';
import {BannerTop, Label, LabelLink, LoadContatiner, NameHero} from './styles';
import {ParamList} from '../../types';
import {PALETTE} from '../../assets/Colors';

const DetailHero: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'DetailHero'>>();

  const api = new ApiService();

  const [hero, setHero] = useState<Hero>();
  const [loading] = useState(false);

  const loadDetails = useCallback(async () => {
    const id = route.params?.id;
    if (id) {
      const response = await api.geHeroById(id);
      if (response.isSuccess) {
        setHero(response.result);
      } else {
        ToastAndroid.show('Herói não encontrado!', ToastAndroid.LONG);
      }
    }
  }, [api, route.params]);

  useEffect(() => {
    loadDetails();
  }, [loadDetails]);

  function handleGoToLink(link: string) {
    navigation.navigate('Web', {link});
  }

  if (loading) {
    return (
      <LoadContatiner>
        <ActivityIndicator size={32} color={PALETTE.PRIMARY} />
      </LoadContatiner>
    );
  }

  if (!hero) {
    return null;
  }

  return (
    <SafeAreaView>
      <BannerTop
        source={{uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`}}>
        <NameHero>{hero.name}</NameHero>
      </BannerTop>

      <Label>Links</Label>

      {hero.urls.map((url, index) => (
        <TouchableOpacity
          key={`${index}`}
          onPress={() => handleGoToLink(url.url)}>
          <LabelLink>{`${url.type} >`}</LabelLink>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};
export default DetailHero;
