import styled from "styled-components";
import React, { useEffect } from "react";
import { Modal, ModalContent } from "../cinema/CinemaModal";

const Close = styled.div`
  position: relative;
  text-align: center;
  button{
    position: absolute;
    bottom: 1px;
    right: -10px;
    width: 19px;
    height: 19px;
    border: none;
    text-indent: -9999em;
    background: transparent url("/close_19.png") no-repeat 0 0;
    cursor: pointer;
  }
`

const MovieVideoModal = ({ oncloseModal, videos }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        oncloseModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [oncloseModal]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
        document.body.style.overflow = 'auto';
    };
}, []);

  return (
    <Modal>
      <ModalContent>
        <Close>
        <button onClick={oncloseModal}>닫기</button>
        </Close>
        <div key={videos.key}>
          <iframe
            title={videos.name}
            width="920"
            height="527"
            src={`https://www.youtube.com/embed/${videos[0].key}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default MovieVideoModal;
