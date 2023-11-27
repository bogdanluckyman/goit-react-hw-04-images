import React, { Component } from 'react';
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

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
    selectedImageId: null,
  };

  modalIsOpen = id => {
    this.setState({
      isModalOpen: true,
      selectedImageId: id,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
      selectedImageId: null,
    });
  };

  render() {
    const { images } = this.props;
    const { selectedImageId } = this.state;

    return (
      <>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <GalleryItemWrapper key={id}>
            <GalleryItemImage
              src={webformatURL}
              alt="smallPhoto"
              onClick={() => this.modalIsOpen(id)}
            />
            <Modal
              isOpen={this.state.isModalOpen && selectedImageId === id}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Big picture"
            >
              <img src={largeImageURL} alt="bigPhoto" />
            </Modal>
          </GalleryItemWrapper>
        ))}
      </>
    );
  }
}
