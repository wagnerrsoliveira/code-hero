import React from 'react';
import { View } from 'react-native';
import { InputStyled, LabelStyled } from './styles';
import { IInputProps } from './types';

const Input: React.FC<IInputProps> = ({ label, value, onChange }) => {
    return (<View>
        <LabelStyled>{label}</LabelStyled>
        <InputStyled
            value={value}
            onChangeText={onChange}
        />
    </View>);
}

export default Input;