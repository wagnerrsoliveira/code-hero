import { useNavigation } from '@react-navigation/native';
import md5 from 'js-md5';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import CardList from '../../components/CardList';
import Input from '../../components/Input';
import Pagination from '../../components/Pagination ';
import { Hero } from '../../models/Hero';
import { ENV } from '../../utils/Envs';
import { BodyList, ContainerText, HeaderList, MarkerUnderline, SubTitle, Title, TitleList } from './styles';


let debounce = setTimeout(() => { }, 0);

const ListHero: React.FC = () => {

  const { API_BASE_URL, PRIVATE_KEY, PUBLIC_KEY } = ENV;
  const navigation = useNavigation();


  const [name, setName] = useState('');
  const [heros, setHeros] = useState<Hero[]>([]);
  const [pageInfo, setPageInfo] = useState({
    offset: 0,
    limit: 4,
    total: 0,
  })

  useEffect(() => {
    loadHeros(0, '')
  }, [])

  async function loadHeros(offset: number, heroName: string) {
    
    try {
      const timestamp = Number(new Date())
      const hash = md5.create()
      hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)
      const response = await fetch(`${API_BASE_URL}characters?ts=${timestamp}&offset=${offset}&orderBy=name&limit=4&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
      const responseJson = await response.json()
      if (responseJson.code === 200) {
        const { offset, limit, total, results, } = responseJson.data;
        setHeros(results)
        setPageInfo({ offset, limit, total })
      }

    } catch (error) {
      console.log('loadHeros', error)
    }

  }

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

  async function hanlePage(pageNumber: number) {

    await loadHeros(pageNumber, name)
  }

  function handleChangeName(heroName: string) {
    setName(heroName);
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      loadHeros(pageInfo.offset, heroName)
    }, 2000)
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
        onChange={handleChangeName}
      />
    </HeaderList>
    <BodyList >
      <TitleList>Nome</TitleList>
      <FlatList
        data={heros}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(hero, __) => String(hero.id)}
      />
      <Pagination
        offset={pageInfo.offset}
        limit={pageInfo.limit}
        maxCicleButton={3}
        totalPage={pageInfo.total}
        handlePage={hanlePage}
      />
    </BodyList>
  </View>);
}

export default ListHero;