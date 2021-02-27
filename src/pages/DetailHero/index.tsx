import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { ActivityIndicator, Dimensions } from 'react-native';
import { SafeAreaView, ImageBackground, ToastAndroid } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Hero } from '../../models/Hero';
import { ApiService } from '../../services/ApiService';
import { Label, LabelLink, LoadContatiner, NameHero } from './styles';
import { ParamList } from '../../utils/types';
import { PALETTE } from '../../assets/Colors';

const { width } = Dimensions.get('screen')

const DetailHero: React.FC = () => {

  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'DetailHero'>>();

  const api = new ApiService();

  const [hero, setHero] = useState<Hero>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadDetails() {
      const id = route.params?.id;
      if (!!id) {
        const response = await api.geHeroById(id);
        if (response.isSuccess) {
          setHero(response.result);
        } else {
          ToastAndroid.show('Herói não encontrado!', ToastAndroid.LONG);
        }
      }
    }
    loadDetails();
  }, [])

  function handleGoToLink(link: string) {
    navigation.navigate('Web', { link });
  }

  if (loading) {
    return (
      <LoadContatiner>
        <ActivityIndicator size={32} color={PALETTE.PRIMARY} />
      </LoadContatiner>
    )
  }

  if (!hero) return null;

  return (
    <SafeAreaView>
      <ImageBackground
        source={{ uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}` }}
        style={{ height: 200, width, marginBottom: 32 }}
      >
        <NameHero >{hero.name}</NameHero>
      </ImageBackground>

      <Label>Links</Label>

      {
        hero.urls.map((url, index) => (
          <TouchableOpacity
            key={`${index}`}
            onPress={() => handleGoToLink(url.url)}
          >
            <LabelLink>{`${url.type} >`}</LabelLink>
          </TouchableOpacity>
        ))
      }
    </SafeAreaView>
  )
}
export default DetailHero;