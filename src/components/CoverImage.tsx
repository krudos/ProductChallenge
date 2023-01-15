import React, {FC} from 'react';
import {getImage} from '../mocks/config';
import {BackgroundImage, Container, Title} from './CoverImage.styled';

interface ProductCardProps {
  name: string;
  image: string;
}
const CoverImage: FC<ProductCardProps> = ({name, image}) => {
  return (
    <Container>
      <BackgroundImage source={getImage(image)}>
        <Title>{name}</Title>
      </BackgroundImage>
    </Container>
  );
};

export default CoverImage;
