import { useNavigation } from '@react-navigation/native';
import md5 from 'js-md5';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import CardList from '../../components/CardList';
import Input from '../../components/Input';
import { Hero } from '../../models/Hero';
import { ENV } from '../../utils/Envs';
import { BodyList, ContainerText, HeaderList, MarkerUnderline, SubTitle, Title, TitleList } from './styles';

const ListHero: React.FC = () => {

  const { API_BASE_URL, PRIVATE_KEY, PUBLIC_KEY } = ENV;
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [heros, setHeros] = useState<Hero[]>([]);
  const [pageInfo, setPageInfo] = useState({
    offset: 0,
    limit: 0,
    total: 0,
    count: 0,
  })

  useEffect(() => {
    async function loadHeros() {
      const timestamp = Number(new Date())
      const hash = md5.create()
      hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)
      const response = await fetch(`${API_BASE_URL}characters?ts=${timestamp}&orderBy=name&limit=4&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
      const responseJson = await response.json()
      
      //setHeros(responseJson.data.results)
      const { offset, limit,total,count,results } = responseJson.data;
      console.log(results[0].name)
      setHeros(results)
      setPageInfo({ offset, limit,total,count })
    }

    loadHeros()
  }, [])

  function showDetails(id: number) {
    console.log(id)
    navigation.navigate('DetailHero', { id })
  }

  function renderItem(hero: Hero) {
    const { id, thumbnail, name } = hero;
    return <CardList
      id={id}
      uri={`${thumbnail.path}.${thumbnail.extension}`}
      description={name}
      onPress={showDetails}
    />
  }

  return (<View style={{ flex: 1 }}>
    <HeaderList>
      <ContainerText>
        <Title>BUSCA MARVEL</Title>
        <SubTitle>TESTE FRONT-END</SubTitle>
      </ContainerText>
      <MarkerUnderline />
      <Input
        label="Nome do Personagem"
        value={name}
        onChange={setName}
      />
    </HeaderList>
    <BodyList >
      <TitleList>Nome</TitleList>
      <FlatList
        data={heros}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(hero,__) => String(hero.id)}
      />
    </BodyList>
  </View>);
}

export default ListHero;