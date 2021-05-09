import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {ParamList} from '../../types';
import {LoadContatiner} from '../ListHero/styles';
import {ActivityIndicator} from 'react-native';
import {PALETTE} from '../../assets/Colors';
import {WebViewContainer} from './styles';

const Web: React.FC = () => {
  const route = useRoute<RouteProp<ParamList, 'Web'>>();

  return (
    <WebViewContainer
      source={{uri: route.params.link || ''}}
      startInLoadingState
      renderLoading={() => (
        <LoadContatiner>
          <ActivityIndicator size={32} color={PALETTE.PRIMARY} />
        </LoadContatiner>
      )}
    />
  );
};

export default Web;
