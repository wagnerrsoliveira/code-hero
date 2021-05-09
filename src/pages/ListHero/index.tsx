import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, ToastAndroid} from 'react-native';
import {PALETTE} from '../../assets/Colors';
import CardList from '../../components/CardList';
import Input from '../../components/Input';
import Pagination from '../../components/Pagination ';
import {Hero} from '../../models/Hero';
import {ApiService} from '../../services/ApiService';
import {
  BodyList,
  ContainerText,
  HeaderList,
  LoadContatiner,
  MarkerUnderline,
  PageContainer,
  SubTitle,
  Title,
  TitleList,
} from './styles';

const OFFSET_DEAFAULT = 0;

let debounce = setTimeout(() => {}, 0);

const ListHero: React.FC = () => {
  const navigation = useNavigation();

  const [nameToSearch, setNameToSearch] = useState('');
  const [heros, setHeros] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(false);
  const [pageInfo, setPageInfo] = useState({
    offset: OFFSET_DEAFAULT,
    limit: 4,
    total: 0,
  });

  const loadHeros = useCallback(
    async (heroName: string, currentOffset: number) => {
      setLoading(true);
      const api = new ApiService();
      const result = await api.geHeros(heroName, currentOffset);

      if (result?.isSuccess) {
        const {offset, limit, total, results} = result;
        setHeros(results);
        setPageInfo({offset, limit, total});
      } else {
        ToastAndroid.show(
          'Ocorreu um erro ao recuperar a lista de heroes, verrifique e tente novamente!',
          ToastAndroid.LONG,
        );
      }
      setLoading(false);
    },
    [],
  );

  useEffect(() => {
    loadHeros('', OFFSET_DEAFAULT);
  }, [loadHeros]);

  function showDetails(id: number) {
    navigation.navigate('DetailHero', {id});
  }

  function renderItem(item: Hero, index: number) {
    const {id, thumbnail, name} = item;
    return (
      <CardList
        index={index}
        id={id}
        uri={`${thumbnail.path}.${thumbnail.extension}`}
        description={name}
        onPress={showDetails}
      />
    );
  }

  async function hanlePage(pageNumber: number) {
    if (pageNumber === pageInfo.offset) {
      return;
    }

    setPageInfo({...pageInfo, offset: pageNumber});
    await loadHeros(nameToSearch, pageNumber);
  }

  function handleChangeName(heroName: string) {
    setNameToSearch(heroName);
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      loadHeros(heroName, OFFSET_DEAFAULT);
    }, 2000);
  }

  function renderBody() {
    if (loading) {
      return (
        <LoadContatiner>
          <ActivityIndicator size={32} color={PALETTE.WHITE} />
        </LoadContatiner>
      );
    }

    return (
      <>
        <TitleList>Nome</TitleList>
        <FlatList
          data={heros}
          renderItem={({item, index}) => renderItem(item, index)}
          keyExtractor={(hero, __) => String(hero.id)}
        />
      </>
    );
  }

  return (
    <PageContainer>
      <HeaderList>
        <ContainerText>
          <Title>BUSCA MARVEL</Title>
          <SubTitle>TESTE FRONT-END</SubTitle>
        </ContainerText>
        <MarkerUnderline />
        <Input
          label="Nome do Personagem"
          value={nameToSearch}
          onChange={handleChangeName}
        />
      </HeaderList>
      <BodyList>
        {renderBody()}
        <Pagination
          offset={pageInfo.offset}
          limit={pageInfo.limit}
          maxCicleButton={3}
          totalPage={pageInfo.total}
          handlePage={hanlePage}
        />
      </BodyList>
    </PageContainer>
  );
};

export default ListHero;
