import styled from '../helpers/styled';
import {TouchableOpacity, View} from 'react-native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  height: 50px;
  background-color: ${props =>
    props.selected ? props.theme.colors?.blue : props.theme.colors?.grey};
`;

export const Title = styled.Text`
  text-align: center;
  background-color: ${props =>
    props.selected ? props.theme.colors?.white : props.theme.colors?.black};
`;
