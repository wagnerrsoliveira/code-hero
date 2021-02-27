import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { ParamList } from '../../utils/types';
import { WebView } from 'react-native-webview';
import { LoadContatiner } from '../ListHero/styles';
import { ActivityIndicator } from 'react-native';
import { PALETTE } from '../../assets/Colors';

const Web: React.FC = () => {

    const route = useRoute<RouteProp<ParamList, 'Web'>>();

    return (
        <WebView
            source={{ uri: route.params.link || '' }}
            style={{ flex: 1 }}
            startInLoadingState
            renderLoading={() => (
                <LoadContatiner>
                    <ActivityIndicator size={32} color={PALETTE.PRIMARY} />
                </LoadContatiner>
            )}
        />
    );;
}

export default Web;