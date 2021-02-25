import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import { PALETTE } from '../../assets/Colors';

import { DescriptionStyled, ImageStyled, TouchableContainer } from './styles';
import { ICardListProps } from './types';

const CardList: React.FC<ICardListProps> = ({
    id, description, uri, onPress
}) => {

    const {width} = Dimensions.get('screen')
    const slide = useRef(new Animated.Value(width)).current;

    const slideIn = () => {
        Animated.timing(slide, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };



    useEffect(() => {
        slideIn()
    }, [])

    return (
        <TouchableContainer
            onPress={() => onPress(id)}
        >
            <Animated.View
                style={{
                    flexDirection:'row',
                    alignItems: 'center',
                    paddingVertical:18,
                    paddingHorizontal:25,
                    backgroundColor:PALETTE.WHITE,
                    transform: [{translateY:slide}] 
                }}
            >
                <ImageStyled source={{ uri }} />
                <DescriptionStyled>
                    {description}
                </DescriptionStyled>
            </Animated.View>
        </TouchableContainer>);
}

export default CardList;