import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { writePost, updatePost } from "../../modules/write";
import React, { useEffect } from "react";
import PostWriteActionButtons from "../../components/write/PostWriteActionButtons";

const WriteActionButtonsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, body, tags, post, postError, userId, originalPostNum } =
    useSelector(({ write, user }) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
      userId: user.user && user.user.id,
      originalPostNum: write.originalPostNum,
    }));
  const onPublish = () => {
    if (originalPostNum) {
      dispatch(updatePost({ postNum: originalPostNum, title, body, tags }));
      return;
    }
    dispatch(
      writePost({
        title,
        body,
        tags,
        userId,
      })
    );
  };

  const onCancel = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (post) {
      navigate("/postlist");
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);
  return (
    <PostWriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!originalPostNum}
    />
  );
};

export default WriteActionButtonsContainer;
