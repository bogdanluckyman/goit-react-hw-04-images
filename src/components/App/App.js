import { useState, useEffect } from 'react';
import { GlobalStyle } from '../GlobalStyled';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Searchbar } from '../Searchbar/Searchbar';
import { fetchImage } from '../api';
import { HeroApp } from './App.styled';
import { Button } from 'components/BtnLoadMore/BtnLoadMore';
import { MagnifyingGlass } from 'react-loader-spinner';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query.trim() === '') {
      return;
    }

    const initialFetchImage = async () => {
      try {
        setIsLoading(true);
        const currentQuery = query.split('/').pop();
        const foundImage = await fetchImage({ currentQuery, page });
        setImages(prevImages => [...prevImages, ...foundImage.hits]);
        setTotalHits(foundImage.totalHits);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    initialFetchImage();
  }, [query, page]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const newQuery = evt.target.elements.imagesValue.value;
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setImages([]);
    setTotalHits(null);
  };

  const loadMore = () => setPage(prevPage => prevPage + 1);

  return (
    <HeroApp>
      <Searchbar submit={handleSubmit} />
      {isLoading && (
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      )}
      <ImageGallery images={images} />
      {totalHits !== null && images.length < totalHits && (
        <Button clickFunc={loadMore} />
      )}
      <GlobalStyle />
    </HeroApp>
  );
};
