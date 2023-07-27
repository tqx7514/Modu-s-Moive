import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  readPostComment,
  removePostComment,
  unloadPostComment,
} from "../../../modules/postcomment";
import AdminPostCommentList from "../../../components/admin/post/AdminPostCommentList";

const AdminPostCommentListContainer = () => {
  const { postNum } = useParams();
  const dispatch = useDispatch();
  const { user, post, postcomment } = useSelector(
    ({ user, post, postcomment }) => ({
      user: user.user,
      post: post.post,
      postcomment: postcomment.comments,
    })
  );

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

  return (
    <AdminPostCommentList
      user={user}
      post={post}
      onRemove={onRemove}
      postNum={postNum}
      postcomment={postcomment}
    />
  );
};

export default AdminPostCommentListContainer;
