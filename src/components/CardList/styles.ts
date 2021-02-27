import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import { PALETTE } from "../../assets/Colors";


export const TouchableContainer = styled.TouchableNativeFeedback``;

export const DescriptionStyled = styled.Text`
    font-family: Roboto-Regular;
    font-size:18px;
    color:${PALETTE.BLACK};  
    padding: 0 25px;
`;

export const ImageStyled = styled.Image`
    height:58px;
    width:58px;
    border-radius:29px;
`;
