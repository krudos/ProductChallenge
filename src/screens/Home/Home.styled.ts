import styled from '../../helpers/styled';
import {SafeAreaView} from 'react-native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.colors?.white};
`;

export const Root = styled.View`
  flex: 1;
  margin-left: 16px;
  margin-right: 16px;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    marginLeft: 16,
    marginRight: 16,
  },
})`
  flex: 1;
`;

export const FlatListView = styled.FlatList`
  margin-bottom: 24px;
`;

export const Container = styled.View`
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
