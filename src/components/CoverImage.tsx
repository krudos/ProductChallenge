import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {BackgroundImage, Container} from './CoverImage.styled';

interface ProductCardProps {
  name: string;
  image: string;
}
const CoverImage: FC<ProductCardProps> = ({name, image}) => {
  return (
    <Container>
      <Text>{name}</Text>
      <BackgroundImage source={{uri: image}} />
    </Container>
  );
};

export default CoverImage;
