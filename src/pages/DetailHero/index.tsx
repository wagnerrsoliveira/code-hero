import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Dimensions, TextInput, TouchableNativeFeedback } from 'react-native';
import { SafeAreaView, ImageBackground, ToastAndroid } from 'react-native';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PALETTE } from '../../assets/Colors';
import { Hero } from '../../models/Hero';
import { ApiService } from '../../services/ApiService';
import { Label, LabelLink, NameHero } from './styles';
import { ParamList } from './types';

const { width } = Dimensions.get('screen')

const DetailHero: React.FC = () => {

  const route = useRoute<RouteProp<ParamList, 'DetailHero'>>();

  const api = new ApiService();

  const [hero, setHero] = useState<Hero>();

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

  if (!hero) return null;


  return (
    <SafeAreaView>
      <ImageBackground
        source={{ uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}` }}
        style={{ height: 200, width , marginBottom:32}}
      >
        <NameHero >{hero.name}</NameHero>
      </ImageBackground>
      
      <Label>Links</Label>

      {hero.urls.map((url,index)=>(
        <TouchableOpacity
          key={`${index}`}
        >
          <LabelLink>{`${url.type} >`}</LabelLink>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  )
}
export default DetailHero;