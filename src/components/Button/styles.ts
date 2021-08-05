import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButtonProps, RectButton } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProps {
  color?: string
  enabled?: boolean
  loading?: boolean
}

interface TextProps {
  light: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  padding: 19px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color || props.theme.colors.main};
  opacity: ${ props => 
    !props.enabled || props.loading ? .5 : 1 };
`;

export const Title = styled.Text<TextProps>`
  font-family: ${props => props.theme.fonts.primary_500};
  color: ${({ light, theme }) => 
    light ? theme.colors.header : theme.colors.shape
  };
  font-size: ${RFValue(15)}px;  
`;
