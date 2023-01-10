import React, {FC} from 'react';
import {Container, Title} from './CategoryButton.styled';

interface CategoryButtonProps {
  title: string;
  id: string;
  selected: boolean;
  onPress?: () => void;
}
const CategoryButton: FC<CategoryButtonProps> = ({id, title, selected}) => {
  console.log('selected', selected);
  return (
    <Container key={id} selected={selected}>
      <Title selected={selected}>{title}</Title>
    </Container>
  );
};

export default CategoryButton;
