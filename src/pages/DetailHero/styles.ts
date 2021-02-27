import styled from 'styled-components/native';
import { PALETTE } from '../../assets/Colors';

export const NameHero = styled.Text`
       position:absolute;
       bottom:-24px;
       padding:8px;
       width:auto;
       border-bottom-right-radius:16px;
       border-top-right-radius:16px;
       background-color:${PALETTE.WHITE};
       font-size:24px; 
       color:${PALETTE.BLACK};
`;


export const Label = styled.Text`
    font-size:18px;
    padding: 8px;
`;

export const LabelLink = styled.Text`
    font-size:16px;
    padding:8px 16px;
    width: 80%;
    background-color:${PALETTE.GREY_LIGHT};
    margin-bottom:10px;
    color:${PALETTE.WHITE};
`;