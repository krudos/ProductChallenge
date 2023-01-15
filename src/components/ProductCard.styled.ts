import styled from '../helpers/styled';

export const Container = styled.View`
  width: 45%;
  margin-bottom: 12px;
`;

export const ImageView = styled.Image`
  width: 100px;
  height: 180px;
`;

export const GreyContainer = styled.View`
  height: 200px;
  background-color: ${props => props.theme.colors?.grey};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const Brand = styled.Text`
  text-align: left;
  color: ${props => props.theme.colors?.darkGrey};
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const Name = styled.Text`
  text-align: left;
  color: ${props => props.theme.colors?.black};
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const Price = styled.Text`
  text-align: left;
  color: ${props => props.theme.colors?.black};
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
`;
