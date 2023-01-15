import React, {FC} from 'react';
import {Container, Title} from './CategoryButton.styled';

interface CategoryButtonProps {
  title: string;
  id: string;
  selected: boolean;
  onPress?: () => void;
}
const CategoryButton: FC<CategoryButtonProps> = ({
  title,
  selected,
  onPress,
}) => {
  return (
    <Container selected={selected} onPress={onPress}>
      <Title selected={selected}>{title}</Title>
    </Container>
  );
};

export default CategoryButton;
