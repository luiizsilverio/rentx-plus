import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';

interface Props {
  isFocused: boolean  
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const IconContainer = styled.View<Props>`
  height: 56px;
  width: 56px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background_secondary};
  margin-right: 4px;

  ${props => props.isFocused && css`
    border-bottom-width: 1px;
    border-bottom-color: ${props.theme.colors.main};
  `}    
`;

export const InputText = styled(TextInput)<Props>`
  flex: 1;
  background-color: ${props => props.theme.colors.background_secondary};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  padding: 0 16px;    

  ${props => props.isFocused && css`
    border-bottom-width: 1px;
    border-bottom-color: ${props.theme.colors.main};
  `}  
`;
