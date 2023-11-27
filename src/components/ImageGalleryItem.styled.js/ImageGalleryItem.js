import { useState } from 'react';
import {
  GalleryItemImage,
  GalleryItemWrapper,
} from './ImageGalleryItem.styled';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    overflow: 'hidden',
    padding: 0,
  },
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
};

Modal.setAppElement('#root');

export const ImageGalleryItem = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState(null);

  const modalIsOpen = id => {
    setIsModalOpen(true);
    setSelectedImageId(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageId(null);
  };

  return (
    <>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <GalleryItemWrapper key={id}>
          <GalleryItemImage
            src={webformatURL}
            alt="smallPhoto"
            onClick={() => modalIsOpen(id)}
          />
          <Modal
            isOpen={isModalOpen && selectedImageId === id}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Big picture"
          >
            <img src={largeImageURL} alt="bigPhoto" />
          </Modal>
        </GalleryItemWrapper>
      ))}
    </>
  );
};
