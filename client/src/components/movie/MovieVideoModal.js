import styled from "styled-components";
import React, { useEffect } from "react";
import { Modal, ModalContent } from "../cinema/CinemaModal";

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

  return (
    <Modal>
      <ModalContent>
        <button onClick={oncloseModal}>닫기</button>
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
