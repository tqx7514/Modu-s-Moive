import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { writePost } from "../../modules/write";
import React, { useEffect } from "react";
import WriteActionButtons from "../../components/meet/WriteActionButtons";

const WriteActionButtonsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, body, tags, post, postError, user } = useSelector(
    ({ write, user }) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
    })
  );
  const userId = "aaa";
  const onPublish = () => {
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

  // useEffect(() => {
  //     if(post) {
  //         const { _id, user } = post;
  //         navigate(`/@${user.username}/${_id}`);
  //     }
  //     if(postError) {
  //         console.log(postError);
  //     }
  // }, [navigate, post, postError]);
  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default WriteActionButtonsContainer;
