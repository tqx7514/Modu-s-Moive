import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  AdminReadPost,
  AdminUnloadPost,
} from "../../../modules/admin/adminpost";
import AdminPostViewer from "../../../components/post/admin/AdminPostViewer";
import PostActionButtons from "../../../components/post/PostActionButtons";
import { AdminRemovePost } from "../../../lib/api/admin/adminposts";

const AdminPostViewerContainer = () => {
  const { postNum } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { post, error, loading, user } = useSelector(
    ({ adminPost, loading, user }) => ({
      post: adminPost.post,
      error: adminPost.error,
      loading: loading["adminpost/ADMINREAD_POST"],
      user: user.user,
    })
  );
  console.log("컨테이너 post", post);
  console.log("AdminContainer의 postNum", postNum);
  useEffect(() => {
    dispatch(AdminReadPost(postNum));
    return () => {
      dispatch(AdminUnloadPost());
    };
  }, [dispatch, postNum]);

  const onRemove = async () => {
    try {
      await AdminRemovePost(postNum);
      navigate("/admin/postlist");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <AdminPostViewer
      user={user}
      post={post}
      loading={loading}
      error={error}
      actionButtons={<PostActionButtons onRemove={onRemove} />}
    />
  );
};

export default AdminPostViewerContainer;
