import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { readPost, unloadPost } from "../../modules/post";
import { readPostComment, unloadPostComment } from "../../modules/postcomment";
import PostViewer from "../../components/post/PostViewer";
import PostActionButtons from "../../components/post/PostActionButtons";
import { setOriginalPost } from "../../modules/write";
import { removePost } from "../../lib/api/posts";

const PostViewerContainer = () => {
  const { postNum } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { post, error, loading, user, postcomment } = useSelector(
    ({ post, loading, user, postcomment }) => ({
      post: post.post,
      error: post.error,
      loading: loading["post/READ_POST"],
      user: user.user,
      postcomment: postcomment.comments,
    })
  );
  console.log("postcomment입니다.", postcomment);
  useEffect(() => {
    dispatch(readPost(postNum));
    dispatch(readPostComment(postNum));
    return () => {
      dispatch(unloadPost());
      dispatch(unloadPostComment());
    };
  }, [dispatch, postNum]);

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    navigate("/write");
  };

  const onRemove = async () => {
    try {
      await removePost(postNum);
      navigate("/postlist");
    } catch (e) {
      console.log(e);
    }
  };

  const ownPost = (user && user.id) === (post && post.userId);

  return (
    <PostViewer
      user={user}
      post={post}
      loading={loading}
      error={error}
      actionButtons={
        ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove} />
      }
    />
  );
};

export default PostViewerContainer;
