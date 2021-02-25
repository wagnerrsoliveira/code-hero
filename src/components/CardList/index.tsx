import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { DescriptionStyled, ImageStyled } from './styles';
import { ICardListProps } from './types';

const CardList: React.FC<ICardListProps> = ({
    id, description, uri, onPress
}) => {
    return (<TouchableOpacity
        onPress={() => onPress(id)}
    >
        <ImageStyled source={{ uri }} />
        <DescriptionStyled>
            {description}
        </DescriptionStyled>
    </TouchableOpacity>);
}

export default CardList;