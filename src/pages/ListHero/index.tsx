import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Input from '../../components/Input';
import { BodyList, ContainerText, HeaderList, MarkerUnderline, SubTitle, Title, TitleList } from './styles';

// import { Container } from './styles';

const ListHero: React.FC = () => {


  const [name, setName] = useState('');

  return (<View style={{flex:1}}>
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
    </BodyList>
  </View>);
}

export default ListHero;