import { useState, useCallback } from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import CommentRemoveModal from "./CommentRemoveModeal";
import MovieCommentEditModal from "./MovieCommentEditModal";

const CommentActionButtonsBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
    margin-top: -1.5rem;
`;

const ActionButton = styled.button`
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    color: ${palette.gray[6]};
    font-weight: bold;
    border: none;
    outline: none;
    font-size: 0.875rem;
    cursor: pointer;
    &:hover {
        background: ${palette.gray[1]};
        color: ${palette.cyan[7]};
    }
    & + & {
        margin-left: 0.25rem;
    }
`;

const CommentActionButtons = ({onRemove, commentNum, onEdit, content, star, onChangestar, onRate}) => {
    const [modal, setModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const onRemoveClick = () => {
        setModal(true);
    };
    const onCancel = () => {
        setModal(false);
    };
    const onConfirm = () => {
        setModal(false);
        onRemove(commentNum);
    }
    const openModal = () => {
        setIsOpen(true);
      };
      const oncloseModal = () => {
        setIsOpen(false);
      };
    return(
        <>
        <CommentActionButtonsBlock>
            {/* <ActionButton onClick={onEdit} data-mc_num={commentNum} data-content={content} data-star={star}>수정</ActionButton> */}
            <ActionButton onClick={openModal}>수정</ActionButton>
            <ActionButton onClick={onRemoveClick}>삭제</ActionButton>
        </CommentActionButtonsBlock>
        <CommentRemoveModal
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
        />
        {isOpen && (
            <MovieCommentEditModal oncloseModal={oncloseModal} onEdit={onEdit} commentNum={commentNum} content={content} star={star} onChangestar={onChangestar} onRate={onRate}/>
        )}
        </>
    )
}

export default CommentActionButtons;