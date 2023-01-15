import styled from '../helpers/styled';

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 250px;
  justify-content: center;
  border-radius: 8px;
  flex: 1;
  overflow: hidden;
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${props => props.theme.colors?.white};
  font-size: 28px;
  margin-left: 8px;
  margin-right: 8px;
  text-transform: capitalize;
`;
