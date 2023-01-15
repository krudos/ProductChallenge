import React, {FC} from 'react';
import {getImage} from '../mocks/config';
import {BackgroundImage, Title} from './CoverImage.styled';

interface ProductCardProps {
  name: string;
  image: string;
}
const CoverImage: FC<ProductCardProps> = ({name, image}) => {
  return (
    <BackgroundImage source={getImage(image)}>
      <Title>{name}</Title>
    </BackgroundImage>
  );
};

export default CoverImage;
