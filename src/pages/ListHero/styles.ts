import styled from 'styled-components/native';
import { PALETTE } from '../../assets/Colors';

export const HeaderList = styled.View`
    padding:24px;
    padding-bottom:12px;
`;

export const ContainerText = styled.View`
    flex-direction:row;     
`;

export const MarkerUnderline = styled.View`
    width:58px;
    height:4px;
    background-color:${PALETTE.PRIMARY}; 
    margin-bottom:12px; 
`;

export const Title = styled.Text`
    font-family: Roboto-Black;
    font-size:16px;
    font-weight:bold;
    color:${PALETTE.PRIMARY};  
`;

export const SubTitle = styled.Text`
    font-family: Roboto-Light;
    font-size:16px;
    color:${PALETTE.PRIMARY};
`;


export const BodyList = styled.View`
    flex:1;
    background-color:${PALETTE.PRIMARY};
`;


export const TitleList = styled.Text`
    font-family: Roboto Regular;
    font-size:16px;
    color:${PALETTE.WHITE};  
    padding:12px 108px;
`;

export const LoadContatiner = styled.View`
    flex: 1;
    align-items: center; 
    justify-content: center; 
`;