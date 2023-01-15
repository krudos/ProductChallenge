import styled from '../helpers/styled';

export const Container = styled.TouchableOpacity`
  justify-content: center;
  margin-right: 8px;
  height: 50px;
  background-color: ${props =>
    props.selected ? props.theme.colors?.blue : props.theme.colors?.grey};
  border-radius: 8px; ;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${props =>
    props.selected ? props.theme.colors?.white : props.theme.colors?.black};
  margin-left: 8px;
  margin-right: 8px;
  text-transform: capitalize;
`;
