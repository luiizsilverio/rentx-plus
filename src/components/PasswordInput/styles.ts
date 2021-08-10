import { TextInput } from 'react-native';
import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
`;

export const IconContainer = styled.View`
  height: 56px;
  width: 56px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background_secondary};
  margin-right: 4px;
`;

export const InputText = styled(TextInput)`
  flex: 1;
  background-color: ${props => props.theme.colors.background_secondary};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  padding: 0 16px;  
`;
