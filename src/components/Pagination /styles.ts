import styled from 'styled-components/native';
import { PALETTE } from '../../assets/Colors';
import { IActive } from './types';

export const ContainerPaignation = styled.View`
  flex-direction:row;
  align-items: center;
  justify-content: center;
  background-color:${PALETTE.WHITE};
  padding:30px 24px;    
`;

export const ContainerNumbers = styled.View`
  flex-direction:row;
  background-color:${PALETTE.WHITE};
  padding:0px 60px;   
`;

export const CicleView = styled.View<IActive>`
  justify-content:center;
  align-items:center;
  background-color:${(props) => props.isActive ? PALETTE.PRIMARY : PALETTE.WHITE};
  border-color:${(props) => props.isActive ? PALETTE.WHITE : PALETTE.PRIMARY};
  border-width:1px;
  border-radius:16px;
  width:32px;
  height:32px;
  margin:0px 10px;        
`;

export const NumberText = styled.Text<IActive>`
  color:${(props) => props.isActive ? PALETTE.WHITE : PALETTE.PRIMARY};
  font-size: 21px;  
`;

export const ArrowLeft = styled.TouchableOpacity`
  border-top-width: 16px;
  border-right-width: 32px;
  border-bottom-width: 16px;
  border-style: solid;
  background-color: transparent;
  border-top-color: transparent;
  border-right-color: ${PALETTE.PRIMARY};
  border-bottom-color: transparent;
`;

export const ArrowRight = styled.TouchableOpacity`
   border-top-width: 16px;
  border-left-width: 32px;
  border-bottom-width: 16px;
  border-style: solid;
  background-color: transparent;
  border-top-color: transparent;
  border-left-color: ${PALETTE.PRIMARY};
  border-bottom-color: transparent;
`;

