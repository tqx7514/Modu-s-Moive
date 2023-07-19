import styled from "styled-components";
import React, { useEffect, useState, useCallback } from "react";
import { Modal, ModalContent } from "../cinema/CinemaModal";

const StarImg = styled.span`
  cursor: pointer;
  display: inline-block;
  width: 32px;
  height: 62px;
  background: url(${(props) => props.starimage}) no-repeat;
  &.reversible {
    background-position: -32px 0;
  }
`;

const Content = styled.div`
  textarea{
    width: 100%;
    height: 300px;
    font-size: 14px;
    resize: none;
  }
`

const MovieCommentEditModal = ({
    oncloseModal,
    onRate,
    star,
    onChangestar,
    content,
    commentNum,
    onEdit,
  }) => {
    const [rating, setRating] = useState(0);
    const [editContent, setEditedContent] = useState(content);
  
    const handleStarClick = useCallback(
        (selectedRating) => {
          setRating(selectedRating);
          onRate(selectedRating);
        },
        [onRate]
      );
  
      const handleStarMouseEnter = useCallback(
        (selectedRating) => {
          setRating(selectedRating);
          onChangestar({ target: { value: selectedRating } });
        },
        [onChangestar]
      );
  
      const handleStarMouseLeave = useCallback(() => {
        // 별점 값 유지
      }, []);
      
      const handleChangeContent = useCallback((e) => {
        setEditedContent(e.target.value);
      }, []);

      const handleEdit = useCallback(() => {
        onEdit(commentNum, editContent, rating);
        oncloseModal();
      }, [onEdit, commentNum, editContent, rating, oncloseModal]);

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
          <button onClick={oncloseModal}>닫기</button>
          <div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
              <StarImg
                key={value}
                value={star}
                onChange={(e) => onChangestar({ target: { value: e.target.value } })}
                starimage={
                  value <= rating ? "/ico_star64_on.png" : "/ico_star64_off.png"
                }
                className={value % 2 === 0 ? "reversible" : ""}
                onClick={() => handleStarClick(value)}
                onMouseEnter={() => handleStarMouseEnter(value)}
                onMouseLeave={handleStarMouseLeave}
                style={{
                  backgroundImage: `url(${
                    value <= rating ? "/ico_star64_on.png" : "/ico_star64_off.png"
                  })`,
                }}
              />
            ))}
          </div>
          <Content>
          <textarea value={editContent} onChange={handleChangeContent} />
          </Content>
            <button onClick={handleEdit}>수정완료</button>
        </ModalContent>
      </Modal>
    );
  };
  
  export default MovieCommentEditModal;
  

