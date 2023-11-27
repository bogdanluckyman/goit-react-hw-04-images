import { ImageGalleryItem } from '../ImageGalleryItem.styled.js/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryStyled>
      <ImageGalleryItem images={images} />
    </ImageGalleryStyled>
  );
};
