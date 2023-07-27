import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  AdminReadPost,
  AdminUnloadPost,
} from "../../../modules/admin/adminpost";
import { AdminRemovePost } from "../../../lib/api/admin/adminposts";
import AdminPostViewer from "../../../components/admin/post/AdminPostViewer";
import AdminPostActionButtons from "../../../components/admin/post/AdminPostActionButtons";

const AdminPostViewerContainer = () => {
  const { postNum, name } = useParams();
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
    const searchParams = new URLSearchParams(window.location.search);
    const tags = searchParams.get("tags");
    // const searchResult = searchParams.get("search");
    const page = parseInt(searchParams.get("page"), 10) || 1;
    try {
      await AdminRemovePost(postNum);
      console.log("kdkdk");
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
      actionButtons={<AdminPostActionButtons onRemove={onRemove} />}
    />
  );
};

export default AdminPostViewerContainer;
