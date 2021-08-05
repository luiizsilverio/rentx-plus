import styled from 'styled-components/native'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize';
import { Button } from '../../components/Button'

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  background-color: ${props => props.theme.colors.background_primary};

`;

export const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + 116}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(40)}px;
  font-family: ${props => props.theme.fonts.secondary_600};
  color: ${props => props.theme.colors.title};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${props => props.theme.fonts.primary_400};
  color: ${props => props.theme.colors.text};
  line-height: ${RFValue(25)}px;
  margin-top: 16px;
`;

export const Footer = styled.View``;

export const LoginButton = styled(Button)`
  margin-bottom: 8px;
`;

export const Form = styled.View`
  width: 100%;
  margin: 64px 0;
`;
