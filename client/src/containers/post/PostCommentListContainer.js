import { useDispatch, useSelector } from "react-redux";
import PostCommentList from "../../components/post/PostCommentList";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  readPostComment,
  removePostComment,
  unloadPostComment,
} from "../../modules/postcomment";
import PostCommentActionButtons from "../../components/post/PostCommentActionButtons";

const PostCommentListContainer = () => {
  const { postNum } = useParams();
  const dispatch = useDispatch();
  const { user, post, postcomment } = useSelector(
    ({ user, post, postcomment }) => ({
      user: user.user,
      post: post.post,
      postcomment: postcomment.comments,
    })
  );

  console.log("PostCommentListContainer의 postcomment.", postcomment);
  useEffect(() => {
    dispatch(readPostComment(postNum));
    return () => {
      dispatch(unloadPostComment());
    };
  }, [dispatch, postNum]);

  const onRemove = async ({ commentNum, postNum }) => {
    try {
      await dispatch(removePostComment({ commentNum, postNum }));
    } catch (e) {
      console.log(e);
    }
  };

  const ownPostComment = (user && user.id) === (post && post.userId);

  return (
    <PostCommentList
      user={user}
      post={post}
      onRemove={onRemove}
      postNum={postNum}
      postcomment={postcomment}
      ownPostComment={ownPostComment}
    />
  );
};

export default PostCommentListContainer;
