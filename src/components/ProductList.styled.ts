import styled from '../helpers/styled';

export const FlatView = styled.FlatList.attrs({
  contentContainerStyle: {},
  columnWrapperStyle: {justifyContent: 'space-between'},
})`
  flex: 1;
`;
