import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {PALETTE} from '../../assets/Colors';
const {width} = Dimensions.get('screen');

export const BannerTop = styled.ImageBackground`
  height: 200px;
  width: ${width};
  margin-bottom: 32px;
`;

export const NameHero = styled.Text`
  position: absolute;
  bottom: -24px;
  padding: 8px;
  width: auto;
  border-bottom-right-radius: 16px;
  border-top-right-radius: 16px;
  background-color: ${PALETTE.WHITE};
  font-size: 24px;
  font-family: Roboto-Light;
  color: ${PALETTE.BLACK};
`;

export const Label = styled.Text`
  font-size: 18px;
  padding: 8px;
  font-family: Roboto-Regular;
`;

export const LabelLink = styled.Text`
  font-size: 16px;
  padding: 8px 16px;
  width: 80%;
  background-color: ${PALETTE.GREY_LIGHT};
  margin-bottom: 10px;
  color: ${PALETTE.WHITE};
  font-family: Roboto-Light;
`;

export const LoadContatiner = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
